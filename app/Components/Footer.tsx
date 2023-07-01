import React from 'react'
import { Logo } from '../page'
import {BiLogoInstagram,BiLogoFacebookSquare,BiLogoTwitter,BiLogoLinkedinSquare} from "react-icons/bi"
const Footer = () => {

  return (
    <footer className='margin-main'>
    <div className='sm:flex sm:mx-8 sm:justify-between mt-xxl text-center  '>
      <div>
      <Logo color='#141414'/>
      <div className='flex'>
        <i><BiLogoTwitter/></i>
        <i><BiLogoInstagram/></i>
        <i><BiLogoLinkedinSquare/></i>
        <i><BiLogoFacebookSquare/></i>
      </div>
      </div>
      
      <div className='sm:grid sm:grid-cols-4 footer-list  '>

       <div>
        <h2>Why Scissor ?</h2>
        <ul>
          <li>Scissors 101</li>
          <li>Integration api</li>
          <li>Pricing</li>
        </ul>
       </div>

       <div>
        <h2>Solutions</h2>
        <ul>
          <li>Social Media</li>
          <li>Digital Marketing</li>
          <li>Customer service</li>
          <li>For developers</li>
        </ul>
       </div>

       <div>
        <h2>Products</h2>
        <ul>
          <li>Link Management</li>
          <li>QR CodeS</li>
          <li>Link-in-bio</li>
        </ul>

       </div>
       <div>
        <h2>Company</h2>
        <ul>
          <li>About Scissors</li>
          <li>Careers</li>
          <li>Parteners</li>
          <li>Peers</li>
          <li>Contact </li>
          <li>Reviews</li>
        </ul>
       </div>

       <div>
        <h2>Resources</h2>
        <ul>
          <li>Blog</li>
          <li>Resource Library</li>
          <li>Developers</li>
          <li>App Connectors</li>
          <li>Supportt</li>
          <li>Trus center</li>
          <li>Browser Extension</li>
          <li>Mobile App</li>
        </ul>
       </div>

       <div>
        <h2>Features</h2>
        <ul>
          <li>Branded Link</li>
          <li>Mobile Link</li>
          <li>Campaign</li>
          <li>Management & Analytics</li>
          <li>QR Codes Generation</li>
        </ul>
       </div>

       <div>
        <h2>Legal</h2>
        <ul>
          <li>Privacy Policy</li>
          <li>Cokkie Policy</li>
          <li>Terms Of Service</li>
          <li>Acceptable Use Policy</li>
          <li>Code Of Conduct</li>
        </ul>
       </div>

      </div>
    </div>
    </footer>
  )
}

export default Footer
