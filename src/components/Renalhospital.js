import React from 'react'
import '../assets/css/renalhospital.css'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Renalhospital = () => {
  return (
    <div className='renal__hospital'>
      <div className='renal__hospital__container'>
        <div className='renal__hospital__title'>
          <h1>WHAT MAKES US BETTER,</h1>
          <h1>MAKES YOU BETTER.</h1>
        </div>
        <div className='renal__hospital__options'>
          <div className='renal__hospital__section__option'>
            <div className='lord__icon__container'>
              <lord-icon
                src='https://cdn.lordicon.com/wloilxuq.json'
                trigger='loop'
                colors='primary:#ffffff,secondary:#ffffff'
                style={{ width: '50px', height: '50px' }}
              ></lord-icon>
            </div>
            <p>Appoinment</p>
            <AiOutlineArrowRight className='renal__hospital__icon' />
          </div>
          <div className='renal__hospital__section__option'>
            <div className='lord__icon__container'>
              <lord-icon
                src='https://cdn.lordicon.com/mbcrjouw.json'
                trigger='loop'
                colors='primary:#ffffff,secondary:#ffffff'
                style={{ width: '50px', height: '50px' }}
              ></lord-icon>
            </div>
            <p>Find Doctors</p>
            <AiOutlineArrowRight className='renal__hospital__icon' />
          </div>
          <div className='renal__hospital__section__option'>
            <div className='lord__icon__container'>
              <lord-icon
                src='https://cdn.lordicon.com/zzcjjxew.json'
                trigger='loop'
                colors='primary:#ffffff,secondary:#ffffff'
                style={{ width: '50px', height: '50px' }}
              ></lord-icon>
            </div>
            <p>Find Locations</p>
            <AiOutlineArrowRight className='renal__hospital__icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Renalhospital
