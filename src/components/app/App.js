import React, { useContext, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginCard from '../login.card/LoginCard'
import RegisterUser from '../../pages/register.user/RegisterUser'
import Header from '../header/Header'
import Links from '../../pages/links/Links'
import Footer from '../footer/Footer'
import { Context } from '../../Context'
import './App.css'

function App() {
  const { jwt } = useContext(Context)
  const [authenticated, setAuthentication] = useState(jwt && true)

  if (!authenticated) {
    return (
      <Switch>
        <Route exact path="/">
          <LoginCard setAuthentication={setAuthentication} />
        </Route>
        <Route path="/register">
          <RegisterUser setAuthentication={setAuthentication} />
        </Route>
      </Switch>
    )
  } else {
    return (
      <div className="container">
        <Header setAuthentication={setAuthentication} />
        <Links />
        <Footer setAuthentication={setAuthentication} />
      </div>
    )
  }
}

export default App
