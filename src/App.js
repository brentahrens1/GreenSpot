import React, { Component } from 'react';
import './App.css';
import Splash from './Splash/Splash'
import './Maps/Maps.css';
import './Splash/Splash.css'
import './Button/Button.css'
import SignUp from './SignUp/SignUp'
import './SignUp/SignUp.css'
import Login from './Login/Login'
import './Login/Login.css'
import './NavBar/NavBar.css'
import './Footer/Footer.css'
import './SearchBar/SearchBar.css'
import VendorList from './VendorList/VendorList'
import './VendorList/VendorList.css'
import VendorProfile from './VendorProfile/VendorProfile'
import './VendorProfile/VendorProfile.css'
import ShowPage from './ShowPage/ShowPage'
import { Route, Switch } from 'react-router-dom'

const my404 = () => {
  return(
    <div>
      there is an error
    </div>
  )
}
const App = () => {
  return(
    <main>
      <Switch>
        <Route exact path='/' component={ Splash }/>
        <Route exact path='/login' component={ Login }/>
        <Route exact path='/signup' component={ SignUp }/>
        <Route exact path='/main' component={ ShowPage }/>
        <Route exact path='/vendor' component={ VendorProfile }/>
        <Route exact path='/vendorlist' component={ VendorList }/>
        <Route component={ my404 }/>
      </Switch>
    </main>
  )
}

export default App;
