import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { FiInstagram, FiMessageSquare } from 'react-icons/fi'
import { SiTiktok } from 'react-icons/si'
import { GrPinterest } from 'react-icons/gr'
import { ImYoutube } from 'react-icons/im'
import { MdVideoLibrary } from 'react-icons/md'

import '../assets/css/footer.css'

const Footer = () => {
  return (
    <div className='renal__footer'>
      <div className='renal__footer__header'>
        <h5>SIGN UP TODAY FOR OUR E-NEWSLETTER</h5>
        <input type='text' placeholder='Enter Email Address' />
        <button className='renal__btn footer__btn'>
          SUBSCRIBE<div className='dot'></div>
        </button>
      </div>
      <div className='renal__footer__main'>
        <div className='renal__footer__links'>
          <h5>QUICK LINKS</h5>
          <p>Careers</p>
          <p>Immediate Care and Check-in</p>
          <p>Classes, Events and Support Groups</p>
          <p>Medical Records</p>
          <div className='footer__volunteer'>
            <button className='renal__btn footer__btn'>
              GIVE NOW<div className='dot'></div>
            </button>
            <p>Volunteer Your Time </p>
          </div>
        </div>
        <div className='renal__footer__links'>
          <h5>ABOUT US</h5>
          <p>History</p>
          <p>Leadership</p>
          <p>Awards and Accreditations</p>
          <p>Financial Statements and Annual Reports</p>
          <p>Renal Medicine Newsroom</p>
          <p>Community Partnership Program</p>
          <p>Community Health Needs Assessment</p>
          <p>Community Initiatives</p>
          <p>Quality</p>
        </div>
        <div className='renal__footer__links'>
          <h5>BILLING AND INSURANCE</h5>
          <p>Billing Questions</p>
          <p>Financial Assistance</p>
          <p>Pay a Bill</p>
          <p>Insurance Information</p>
          <p>Chargemaster</p>
        </div>
        <div className='renal__footer__links'>
          <h5>FOR MEDICAL PROFESSIONALS</h5>
          <p>For Physicians</p>
          <p>For Nurses</p>
          <p>For Students</p>
          <p>For Qualifying Organizations</p>
          <p>Employee and Physician Login</p>
        </div>
        <div className='renal__footer__links'>
          <h5>RENAL SCHOOL OF MEDICINE</h5>
          <p>Student Admissions</p>
          <p>Education</p>
          <p>Research</p>
          <p>Clinical Trials</p>
          <p>Departments</p>
          <p>Institutes and Centers</p>
        </div>
      </div>
      <div className='renal___footer__last'>
        <div className='renal__footer__last__left'>
          <p>Patient Rights and Policies | Accessibility</p>
          <p>
            © 2021 by Renal Medicine® and Memorial HealthCare. Renal Medicine®
            is a trademark of Memorial HealthCare, used by Renal University.
          </p>
        </div>
        <div className='renal__footer__last__right'>
          <div className='renal__footer_social__icons'>
            <FaFacebookF />
            <FaTwitter />
            <FiInstagram />
            <SiTiktok />
            <FaLinkedinIn />
            <GrPinterest />
            <ImYoutube />
          </div>
          <div className='renal__footer__social__optional'>
            <p>
              <MdVideoLibrary /> <span>VIDEO LIBRARY</span>
            </p>
            <p>
              <FiMessageSquare /> <span>BLOG</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
