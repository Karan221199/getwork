import React from 'react';
import Navbar from './components/Navbar'
import './App.css'

import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/screens/Home'
import UserSignup from './components/screens/UserSignup'
import UserSignin from './components/screens/UserSignin'
import EmployerSignin from './components/screens/EmployerSignin'
import EmployerSignup from './components/screens/EmployerSignup'
import  Createjob from './components/screens/Createjob'
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/signin">
    <UserSignin />
    </Route>

    <Route path="/signup">
    <UserSignup />
    </Route>
    <Route path="/employersignup">
    <EmployerSignup />
    </Route>
    <Route path="/employersignin">
    <EmployerSignin />
    </Route>
    <Route path="/create">
    <Createjob />
    </Route>
    </BrowserRouter>
  );
}

export default App;
