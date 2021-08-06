import React from 'react'
import { useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector('.hospital__navbar')
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 186) {
        navbar.classList.add('navbar__fixed')
      } else {
        navbar.classList.remove('navbar__fixed')
      }
    })
  }, [])
  return (
    <React.Fragment>
      <div className='hospital__navbar'>
        <div className='navbar__header'>
          <Link to='/'>Home</Link> |<span>Patient Portal</span> |
          <span>Career's</span>|<span>Pay a Bill</span> |
          <span>Financial Assistance</span> |<span>For Physicians</span> |
          <span>Renal School of Medicine</span> |<span>Newsroom</span> |
          <span>Contact Us</span>
        </div>
        <div className='navbar__body'>
          {/* div 1 */}
          <div className='navbar__body__main'>
            <div className='navbar__body__main__logo'>
              <lord-icon
                src='https://cdn.lordicon.com/hsotfjpx.json'
                trigger='loop'
                colors='primary:#121331,secondary:#ffffff'
                style={{ width: '50px', height: '50px' }}
              ></lord-icon>
              <div className='navbar__body__main__title'>
                <p>RENAL</p>
                <p>MEDICINE</p>
              </div>
            </div>
            <div className='navbar__body__main__links'>
              <ul>
                <li>
                  <a href='#'>DOCTORS</a>
                </li>
                <li>
                  <a href='#'>LOCATIONS</a>
                </li>
                <li>
                  <a href='#'>CONDITIONS AND SERVICES</a>
                </li>
                <li>
                  <a href='#'>PATIENTS AND VISITORS</a>
                </li>
                <li>
                  <a href='#'>HEALTHBEAT</a>
                </li>
                <li>
                  <a href='#'>CLINICAL RESEARCH</a>
                </li>
              </ul>
            </div>
          </div>
          {/* div 2 */}
          <div className='navbar__body__help'>
            <div className='navbar__body__help__search'>
              <p>How may we help you?</p>
              <div className='search__icon'>
                <BsSearch />
              </div>
            </div>
            <input type='text' />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar
