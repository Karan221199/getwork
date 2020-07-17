//hide-on-med-and-down

import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = ()=>{
    return(
        <nav>
        <div className="nav-wrapper white">
           
          <Link to="/" className="brand-logo left">Getwork</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/signin">UserSignin</Link> </li>
            <li><Link to="/signup">UserSignup</Link></li>
            <li><Link to="/employersignin">EmployerSignin</Link></li>
            <li><Link to="/employersignup">EmployerSignup</Link></li>
          </ul>
        </div>
      </nav>
    )
  
}
export default Navbar