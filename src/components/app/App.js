import React from 'react'
import Login from "../login/Login"
import Header from "../header/Header"
import Main from "../main/Main"
import Footer from '../footer/Footer'
import './App.css'



function App() {
  const authenticated = true;
  if(!authenticated){
    return (
      <Login />
    )
  }else {
    return (
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
