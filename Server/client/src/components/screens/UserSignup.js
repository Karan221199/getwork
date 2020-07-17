import React from 'react';
import {Link} from 'react-router-dom'
const UserSignup = ()=>{
    return(
          <div className="mycard">
        <div className="card auth-card input-field">
            <h2>Getwork</h2>
            <input type="text" 
            placeholder="email"
            />
             <input type="text" 
            placeholder="name"
            />
             <input type="password" 
            placeholder="password"
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1" 
            >SignUp
            </button>
            <h5>
                    <Link to="/signin">have an account?</Link>
                </h5>
        </div>
    </div>
    )
}

export default UserSignup