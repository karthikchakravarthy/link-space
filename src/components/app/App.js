import React, { useContext, useState } from 'react'
import {Route, Switch}  from 'react-router-dom'
import LoginCard from "../login.card/LoginCard"
import Header from "../header/Header"
import Links from "../../pages/links/Links"
import Footer from '../footer/Footer'
import './App.css'
import AddNewLink from '../addNewLink/AddNewLink'
import { Context } from '../../Context'


function App() {
  const [authenticated, setAuthentication] = useState(true);
  if(!authenticated){
    return (
      <LoginCard setAuthentication = {setAuthentication} />
    )
  }else {
    return (
      <div className="container">
        <Header setAuthentication = {setAuthentication}/>
        <Links/>
        <Footer />
      </div>
    );
  }
}

export default App;
