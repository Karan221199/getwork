import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Navbar from './components/Navbar'
import './App.css'

import {BrowserRouter,Route, Switch,useHistory} from 'react-router-dom'
import Home from './components/screens/Home'
import UserSignup from './components/screens/UserSignup'
import UserSignin from './components/screens/UserSignin'
import Appliedjob from './components/screens/Appliedjob'
import {reducer,initialState} from './reducer/UserReducer'


export const UserContext=createContext()


const Routing=()=>{
  const history=useHistory()
  // this is here when user just closes the application and doesnot log out
  const {state,dispatch} =useContext(UserContext)
useEffect(()=>{
  const user=JSON.parse(localStorage.getItem("user"))
  if(user){
    dispatch({type:"USER",payload:user})
    history.push('/')
  }
  else{
    history.push('/signin')
  }
},[])
  return(
    <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/signin">
    <UserSignin />
    </Route>

    <Route path="/signup">
    <UserSignup />
    </Route>
    <Route path="/applied">
    <Appliedjob />
    </Route>
    </Switch>
  )
}



function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Navbar />
   <Routing />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
