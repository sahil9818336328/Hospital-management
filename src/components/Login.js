import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import Swal from 'sweetalert2'
import { useGlobalContext } from '../context'
import doctor from '../assets/images/doctor.png'
import '../assets/css/login.css'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const toggleForm = () => {
    const container = document.querySelector('.container')
    container.classList.toggle('active')
  }
  const { categories } = useGlobalContext()

  const signIn = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        if (auth) {
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
            title: 'Logged in successfully',
            iconColor: '#63599E',
          })

          if (categories === 'LOGIN AS STAFF') {
            history.push('/staff')
          }
          if (categories === 'LOGIN AS ADMIN') {
            history.push('/dashboard')
          }
          if (categories === 'LOGIN AS DOCTOR') {
            history.push('/doctors')
          }
        }
      })
      .catch(() =>
        Swal.fire({
          title:
            'Email or Password is Incorrect, Please create an account to continue',
          confirmButtonColor: '#63599E',
        })
      )
  }

  // Register
  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
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
            title: 'Successfully Registered',
            iconColor: '#63599E',
          })

          if (categories === 'LOGIN AS STAFF') {
            history.push('/staff')
          }
          if (categories === 'LOGIN AS ADMIN') {
            history.push('/dashboard')
          }
          if (categories === 'LOGIN AS DOCTOR') {
            history.push('/doctors')
          }
        }
      })
      .catch(() =>
        Swal.fire({
          title:
            'Email is already in use, Please create an account or login to continue',
          confirmButtonColor: '#63599E',
        })
      )
  }
  return (
    <div className='renal__login'>
      <body>
        <section className='login__section'>
          <div className='container'>
            <div className='user signinBx'>
              <div className='imgBx'>
                <img src={doctor} alt='form_img' />
              </div>
              <div className='formBx'>
                <form autoComplete='off'>
                  <h2>Sign In</h2>
                  <input
                    type='text'
                    value={email}
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type='password'
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input type='submit' value='Login' onClick={signIn} />
                  <p className='signup'>
                    Don't have an account ?<a onClick={toggleForm}>Sign Up.</a>
                  </p>
                </form>
              </div>
            </div>
            <div className='user signupBx'>
              <div className='formBx'>
                <form autoComplete='off'>
                  <h2>Create an account</h2>

                  <input
                    type='email'
                    value={email}
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type='password'
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <input type='submit' value='Sign Up' onClick={register} />
                  <p className='signup'>
                    Already have an account ?
                    <a onClick={toggleForm}>Sign in.</a>
                  </p>
                </form>
              </div>
              <div className='imgBx'>
                <img src={doctor} alt='form__img' />
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  )
}

export default Login
