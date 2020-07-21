//hide-on-med-and-down

import React,{useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
const Navbar = ()=>{

const {state,dispatch} = useContext(UserContext)
const history=useHistory()
const renderList = ()=>{
  if(state){
    return [
      <li><Link to="/applied">AppliedJobs</Link></li>,
      <li>
          <button className="btn waves-effect waves-light #64b5f6 red darken-1 mybtn" 
              onClick={()=>{
                localStorage.clear()
                dispatch({type:"CLEAR"})
                history.push('/signin')
              }}
           >Logout
            </button>
      </li>
      
       ]
  }
  else{
      return [
        <li><Link to="/signin">UserSignin</Link> </li>,
        <li><Link to="/signup">UserSignup</Link></li>,
      
      ]
  }
}

    return(
        <nav>
        <div className="nav-wrapper white">
           
          <Link to={state?"/" : "/signin"} className="brand-logo left">Getwork</Link>
          <ul id="nav-mobile" className="right">
           {renderList()}
          </ul>
        </div>
      </nav>
    )
  
}
export default Navbar