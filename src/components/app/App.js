import React, { useState } from 'react'
import LoginCard from "../login.card/LoginCard"
import Header from "../header/Header"
import Main from "../main/Main"
import Footer from '../footer/Footer'
import './App.css'



function App() {
  const [authenticated, setAuthentication] = useState(false);

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
