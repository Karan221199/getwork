import React,{useState,useContext} from 'react';

import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'
const UserSignin = ()=>{

    const {state,dispatch}=useContext(UserContext)
    const history=useHistory()
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Invalid email",classes:"#c62828 red darken-3"})
            return 
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password:password,
                email:email
            })
            }).then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.error){
                    M.toast({html: data.error,classes:"#c62828 red darken-3"})
                }
                else{
                    localStorage.setItem("jwt1",data.token)
                    localStorage.setItem("user",JSON.stringify(data.user))
                    dispatch({type:"USER",payload:data.user})
                    M.toast({html:"signed in successfully",classes:"#8bc34a light-green" })
                    history.push('/')
                }
        }).catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Getwork</h2>
                <input type="text" 
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
             <input type="password" 
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={()=>PostData()}
                >Signin
                </button>
                <h5>
                    <Link to="/signup">Dont have an account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default UserSignin