import React, { useState } from 'react'
import LoginCard from "../login.card/LoginCard"
import Header from "../header/Header"
import Links from "../../pages/links/Links"
import Footer from '../footer/Footer'
import './App.css'


function App() {
  const [authenticated, setAuthentication] = useState(true);
  if (!authenticated) {
    return (
      <LoginCard setAuthentication={setAuthentication} />
    )
  } else {
    return (
      <div className="container">
        <Header setAuthentication={setAuthentication} />
        <Links />
        <Footer />
      </div>
    );
  }
}

export default App;
