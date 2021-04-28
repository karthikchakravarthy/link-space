import React, { useState } from 'react'
import {Route, Switch}  from 'react-router-dom'
import LoginCard from "../login.card/LoginCard"
import Header from "../header/Header"
import Main from "../main/Main"
import Footer from '../footer/Footer'
import './App.css'



function App() {
  const [authenticated, setAuthentication] = useState(true);

  if(!authenticated){
    return (
      <LoginCard setAuthentication = {setAuthentication} />
    )
  }else {
    return (
      <div className="container">
        <Header setAuthentication = {setAuthentication} />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
