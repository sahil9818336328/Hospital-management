import React, { useEffect, useState } from 'react'

import { useGlobalContext } from '../context'
import Swal from 'sweetalert2'
import { auth, db } from '../firebase'
import { useHistory } from 'react-router'
import '../assets/css/dashboard.css'

const Staff = () => {
  const [patientName, setPatientName] = useState()
  const [patientAge, setPatientAge] = useState()
  const [patientTreatment, setPatientTreatment] = useState()
  const { user } = useGlobalContext()
  const history = useHistory()
  const logout = () => {
    if (user) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        confirmButtonColor: '#63599E',
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
      })

      Toast.fire({
        icon: 'success',
        title: 'Logged out successfully',
        iconColor: '#63599E',
      })
      auth.signOut()
      history.push('/')
    }
  }
  useEffect(() => {
    // PATIENTS
    const patientList = document.getElementById('patients-list')
    const renderPatients = (doc) => {
      let li = document.createElement('li')
      let name = document.createElement('span')
      let age = document.createElement('span')
      let treatment = document.createElement('span')

      li.setAttribute('data-id', doc.id)
      name.textContent = doc.data().name
      age.textContent = doc.data().age
      treatment.textContent = doc.data().treatment

      li.appendChild(name)
      li.appendChild(age)
      li.appendChild(treatment)
      patientList.appendChild(li)
    }
    db.collection('patients').onSnapshot((snapshot) => {
      let changes = snapshot.docChanges()
      changes.forEach((change) => {
        // console.log(change.doc.data());
        if (change.type === 'added') {
          renderPatients(change.doc)
        } else if (change.type === 'removed') {
          let li = patientList.querySelector('[data-id=' + change.doc.id + ']')
          patientList.removeChild(li)
        }
      })
    })
  }, [])

  useEffect(() => {
    // ADDING PATIENTS
    const patientForm = document.querySelector('#add-patients-form')
    const patientInput = document.querySelector('#patientInput')
    const patientAgeInput = document.querySelector('#patientageInput')
    const patientTreatmentInput = document.querySelector(
      '#patienttreatmentInput'
    )

    patientForm.addEventListener('submit', (e) => {
      e.preventDefault()
      db.collection('patients').add({
        name: patientInput.value,
        age: patientAgeInput.value,
        treatment: patientTreatmentInput.value,
      })
      patientInput.value = ''
      patientAgeInput.value = ''
      patientTreatmentInput.value = ''
    })
  }, [])
  return (
    <div className='dashboard'>
      <div className='dashboard__header'>
        <p>
          Welcome, &nbsp;
          <span className='user'> {user ? user.email : 'hello user'}</span>
          <span className='user'></span>
        </p>
        <button
          className='button button--wapasha button--round-l button--text-thick button--inverted'
          onClick={logout}
        >
          Logout
        </button>
      </div>
      <div className='dashboard__details'>
        <h1>Renal Patient's</h1>

        <div className='content'>
          <div className='admins'>
            <h3>IN WARD</h3>
            <form id='add-patients-form'>
              <input
                type='text'
                name='patientsname'
                placeholder='Patient Name'
                id='patientInput'
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
              <input
                type='number'
                name='patientsage'
                placeholder='Patient Age'
                id='patientageInput'
                value={patientAge}
                onChange={(e) => setPatientAge(e.target.value)}
              />
              <input
                type='text'
                name='patientstreatment'
                placeholder='Patient Treatment'
                id='patienttreatmentInput'
                value={patientTreatment}
                onChange={(e) => setPatientTreatment(e.target.value)}
              />
              <button className='main__button' type='submit'>
                Add Patient
              </button>
            </form>

            <ul id='patients-list'></ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staff
