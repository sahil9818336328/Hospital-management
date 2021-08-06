import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import Swal from 'sweetalert2'
import { auth, db } from '../firebase'
import { useHistory } from 'react-router'
import Chart from '../components/chart'
import '../assets/css/dashboard.css'
import '../assets/css/chart.css'
const Doctors = () => {
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
  return (
    <React.Fragment>
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
          <h1>Doctor's List</h1>

          <div className='content'>
            <div className='admins'>
              <h3>ONGOING TREATMENT</h3>

              <ul id='patients-list'></ul>
            </div>
          </div>
        </div>
      </div>
      <div className='section__chart'>
        <div className='section__center'>
          <div className='chart'>
            <Chart />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Doctors
