import React from 'react'
import "./style.css"

const Footer = () => {
  return (
    <>
      <div className='footer'>
          <div className='footer-icons'>
              <ul>
                  <li><i class="fa-brands fa-github"></i></li>
                  <li> <i class="fa-brands fa-linkedin"></i></li>
                  <li><i class="fa-brands fa-square-instagram"></i></li>
                  <li><i class="fa-brands fa-square-facebook"></i></li>
                  <li><i class="fa-brands fa-square-github"></i></li>
              </ul> 
          </div>
          <div className='footer-desc'>
            <a><h1>Designed & Built by</h1> <span>Fatime Ibrahim</span></a>
          </div>
      </div>
    </>
  )
}

export default Footer
