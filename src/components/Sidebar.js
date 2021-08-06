import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/sidebar.css'

const Sidebar = () => {
  useEffect(() => {
    const sidebar = document.querySelector('#sidebarMenu')

    sidebar.addEventListener(
      'touchmove',
      (e) => {
        e.preventDefault()
      },
      false
    )
  }, [])
  return (
    <React.Fragment>
      <div className='sidebar'>
        <div className='header'></div>
        <input
          type='checkbox'
          className='openSidebarMenu'
          id='openSidebarMenu'
        />
        <label htmlFor='openSidebarMenu' className='sidebarIconToggle'>
          <div className='spinner diagonal part__1'></div>
          <div className='spinner horizontal'></div>
          <div className='spinner diagonal part__2'></div>
        </label>
        <div id='sidebarMenu'>
          <ul className='sidebarMenuInner'>
            <li>
              Renal Hospital <span>Internship Project</span>
            </li>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <a href='#'>DOCTORS</a>
            </li>
            <li>
              <a href='#'>LOCATION</a>
            </li>
            <li>
              <a href='#'>CONDITIONS AND SERVICES</a>
            </li>
            <li>
              <a href='#'>HEALTHBEAT</a>
            </li>
            <li>
              <a href='#'>CLINIC RESEARCH</a>
            </li>
            <li>
              <a href='#'>MyNM Patient Portal</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li>
            <li>
              <a href='#'>Pay a Bill</a>
            </li>
            <li>
              <a href='#'>Financial Assistance</a>
            </li>
            <li>
              <a href='#'>For Physicians</a>
            </li>
            <li>
              <a href='#'>Renal School of Medicine</a>
            </li>
            <li>
              <a href='#'>Newsroom</a>
            </li>
            <li>
              <a href='#'>Contact Us</a>
            </li>
            <li>
              <Link to='/login' className='login'>
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sidebar
