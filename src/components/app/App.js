import React, { useContext, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginCard from '../login.card/LoginCard'
import RegisterUser from '../../pages/register.user/RegisterUser'
import Header from '../header/Header'
import Links from '../../pages/links/Links'
import Footer from '../footer/Footer'
import { Context } from '../../Context'
import ToastMessage from '../toast.message/ToastMessage'
import { useHistory } from 'react-router-dom'
import './App.css'

function App() {
  const history = useHistory()
  const { jwt } = useContext(Context)
  const [authenticated, setAuthentication] = useState(jwt && true)
  if (!authenticated) history.push('/login')
  else history.push('/home')

  return (
    <>
      <Switch>
        <Route path="/home">
          <div className="container">
            <Header setAuthentication={setAuthentication} />
            <Links />
            <Footer setAuthentication={setAuthentication} />
          </div>
        </Route>
        <Route exact path="/login">
          <LoginCard setAuthentication={setAuthentication} />
        </Route>
        <Route path="/register">
          <RegisterUser setAuthentication={setAuthentication} />
        </Route>
      </Switch>

      <ToastMessage />
    </>
  )
}

export default App
