import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import '../assets/css/hero.css'

const Hero = () => {
  const { dispatch } = useGlobalContext()

  const getCategory = (e) => {
    const category = e.currentTarget.textContent

    if (category) {
      dispatch({
        type: 'SET_CATEGORY',
        payload: category,
      })
    } else {
      dispatch({
        type: 'SET_CATEGORY',
        payload: null,
      })
    }
  }

  return (
    <React.Fragment>
      <div id='mySidenav' className='sidenav'>
        <Link to='/login' id='login' onClick={getCategory}>
          LOGIN AS ADMIN
        </Link>
      </div>
      <div id='mySidenav1' className='sidenav' onClick={getCategory}>
        <Link to='/login' id='login1'>
          LOGIN AS DOCTOR
        </Link>
      </div>
      <div id='mySidenav2' className='sidenav' onClick={getCategory}>
        <Link to='/login' id='login2'>
          LOGIN AS STAFF
        </Link>
      </div>
      <div className='hero__container'>
        <div className='section'>
          <div className='section__center'>
            <div className='hero__info'>
              <h2>RENAL RESEARCH CENTER</h2>
              <p>
                Now more than ever, better medicine matters. Get the latest
                information on how COVID-19 may affect you, including
                vaccination, testing, symptoms, treatment, safety and current
                visitor policies.
              </p>
              <button className='hero__btn animated__btn'>
                <span>RENAL RESOURCE CENTER</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hero
