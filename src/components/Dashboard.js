import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useGlobalContext } from '../context'
import '../assets/css/dashboard.css'
import Swal from 'sweetalert2'
import { auth, db } from '../firebase'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [adminName, setAdminName] = useState()
  const [doctorName, setDoctorName] = useState()
  const [doctorNumber, setDoctorNumber] = useState()
  const [staffName, setStaffName] = useState()
  const [staffLocation, setStaffLocation] = useState()
  const { user } = useGlobalContext()
  // console.log(user)
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
    // GETTING DATA FROM FIRESTORE

    // ADMINS
    const adminsList = document.getElementById('admins-list')
    const renderAdmins = (doc) => {
      let li = document.createElement('li')
      let name = document.createElement('span')
      let cross = document.createElement('div')
      li.setAttribute('data-id', doc.id)
      name.textContent = doc.data().name
      cross.textContent = 'x'
      li.appendChild(name)
      li.appendChild(cross)
      adminsList.appendChild(li)

      // DELETING DATA FROM FIRESTORE

      cross.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('data-id')
        db.collection('admins').doc(id).delete()
      })
    }

    // REAL-TIME DATABASE
    db.collection('admins').onSnapshot((snapshot) => {
      let changes = snapshot.docChanges()
      changes.forEach((change) => {
        // console.log(change.doc.data());
        if (change.type === 'added') {
          renderAdmins(change.doc)
        } else if (change.type === 'removed') {
          let li = adminsList.querySelector('[data-id=' + change.doc.id + ']')
          adminsList.removeChild(li)
        }
      })
    })

    // DOCTORS
    const doctorsList = document.getElementById('doctors-list')
    const renderDoctors = (doc) => {
      let li = document.createElement('li')
      let name = document.createElement('span')
      let phone = document.createElement('span')
      let cross = document.createElement('div')
      li.setAttribute('data-id', doc.id)
      name.textContent = doc.data().name
      cross.textContent = 'x'

      phone.textContent = doc.data().phone
      li.appendChild(name)
      li.appendChild(phone)
      li.appendChild(cross)
      doctorsList.appendChild(li)

      // DELETING DATA FROM FIRESTORE

      cross.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('data-id')
        db.collection('doctors').doc(id).delete()
      })
    }

    // REAL-TIME DATABASE
    db.collection('doctors').onSnapshot((snapshot) => {
      let changes = snapshot.docChanges()
      changes.forEach((change) => {
        // console.log(change.doc.data());
        if (change.type === 'added') {
          renderDoctors(change.doc)
        } else if (change.type === 'removed') {
          let li = doctorsList.querySelector('[data-id=' + change.doc.id + ']')
          doctorsList.removeChild(li)
        }
      })
    })

    // PATIENTS
    const patientList = document.getElementById('patients-list')
    const renderPatients = (doc) => {
      let li = document.createElement('li')
      let name = document.createElement('span')
      let age = document.createElement('span')
      let treatment = document.createElement('span')
      let cross = document.createElement('div')

      li.setAttribute('data-id', doc.id)
      name.textContent = doc.data().name
      age.textContent = doc.data().age
      treatment.textContent = doc.data().treatment
      cross.textContent = 'x'

      li.appendChild(name)
      li.appendChild(age)
      li.appendChild(treatment)
      li.appendChild(cross)
      patientList.appendChild(li)

      // DELETING DATA FROM FIRESTORE

      cross.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('data-id')
        db.collection('patients').doc(id).delete()
      })
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

    // STAFFS
    const staffsList = document.getElementById('staffs-list')
    const renderStaffs = (doc) => {
      let li = document.createElement('li')
      let name = document.createElement('span')
      let location = document.createElement('span')
      let cross = document.createElement('div')

      li.setAttribute('data-id', doc.id)
      name.textContent = doc.data().name
      cross.textContent = 'x'

      location.textContent = doc.data().location
      li.appendChild(name)
      li.appendChild(location)
      li.appendChild(cross)

      staffsList.appendChild(li)

      // DELETING DATA FROM FIRESTORE

      cross.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('data-id')
        db.collection('staffs').doc(id).delete()
      })
    }

    // REAL-TIME DATABASE
    db.collection('staffs').onSnapshot((snapshot) => {
      let changes = snapshot.docChanges()
      changes.forEach((change) => {
        // console.log(change.doc.data());
        if (change.type === 'added') {
          renderStaffs(change.doc)
        } else if (change.type === 'removed') {
          let li = staffsList.querySelector('[data-id=' + change.doc.id + ']')
          staffsList.removeChild(li)
        }
      })
    })
  }, [])

  useEffect(() => {
    // ADDING DATA TO FIRESTORE

    // ADD ADMINS
    const adminsForm = document.querySelector('#add-admins-form')
    const input = document.querySelector('#adminInput')

    adminsForm.addEventListener('submit', (e) => {
      e.preventDefault()
      db.collection('admins').add({
        name: input.value,
      })
      input.value = ''
    })
    // ADD DOCTORS
    const doctorsForm = document.querySelector('#add-doctors-form')
    const input_2 = document.querySelector('#doctorInput')
    const input_3 = document.querySelector('#doctorInput2')

    doctorsForm.addEventListener('submit', (e) => {
      e.preventDefault()
      db.collection('doctors').add({
        name: input_2.value,
        phone: input_3.value,
      })
      input_2.value = ''
      input_3.value = ''
    })
    // ADD STAFFS
    const staffsForm = document.querySelector('#add-staffs-form')
    const input_4 = document.querySelector('#staffInput4')
    const input_5 = document.querySelector('#staffInput5')

    staffsForm.addEventListener('submit', (e) => {
      e.preventDefault()
      db.collection('staffs').add({
        name: input_4.value,
        location: input_5.value,
      })
      input_4.value = ''
      input_5.value = ''
    })
  }, [])

  return (
    <React.Fragment>
      <div className='dashboard'>
        <div className='dashboard__header'>
          <p>
            Welcome, &nbsp;
            <span className='user'> {user ? user.email : 'hello user'}</span>
          </p>
          <button
            className='button button--wapasha button--round-l button--text-thick button--inverted'
            onClick={logout}
          >
            Logout
          </button>
        </div>
        <div className='dashboard__details'>
          <h1>Renal Member's</h1>

          <div className='content'>
            <div className='admins'>
              <h3>ADMINS</h3>
              <form id='add-admins-form'>
                <input
                  type='text'
                  name='adminsname'
                  placeholder='Admin Name'
                  id='adminInput'
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                />
                <button className='main__button' type='submit'>
                  Add Admin
                </button>
              </form>

              <ul id='admins-list'></ul>
            </div>
            <div className='doctors'>
              <h3>DOCTORS</h3>
              <form id='add-doctors-form'>
                <input
                  type='text'
                  name='doctorsname'
                  placeholder='Doctor"s Name'
                  id='doctorInput'
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                />

                <input
                  type='number'
                  name='doctorsphone'
                  placeholder='Doctor"s Phone'
                  id='doctorInput2'
                  value={doctorNumber}
                  onChange={(e) => setDoctorNumber(e.target.value)}
                />
                <button className='main__button'>Add Doctor</button>
              </form>

              <ul id='doctors-list'></ul>
            </div>
            <div className='staffs'>
              <h3>STAFFS</h3>
              <form id='add-staffs-form'>
                <input
                  type='text'
                  name='staffsname'
                  placeholder='Staff"s Name'
                  id='staffInput4'
                  value={staffName}
                  onChange={(e) => setStaffName(e.target.value)}
                />
                <input
                  type='text'
                  name='location'
                  placeholder='Staff"s Location'
                  id='staffInput5'
                  value={staffLocation}
                  onChange={(e) => setStaffLocation(e.target.value)}
                />
                <button className='main__button'>Add Staff</button>
              </form>

              <ul id='staffs-list'></ul>
            </div>
            <div className='patients'>
              <h3>PATIENTS</h3>
            </div>
            <ul id='patients-list'></ul>
          </div>
        </div>
      </div>
      <Link
        className='button button--wapasha button--round-l button--text-thick button--inverted button--center'
        to='/'
      >
        Add Patients
      </Link>
    </React.Fragment>
  )
}

export default Dashboard
