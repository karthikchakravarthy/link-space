import React, { useContext, useState } from 'react'
import _ from 'lodash'
import LoginInput from '../../components/login.input/LoginInput'
import FormButton from '../../components/form.button/FormButton'
import HelpText from '../../components/help.text/HelpText'
import { Context } from '../../Context'
import makeApiCall from '../../hooks/useFetch'
import '../../components/login.card/LoginCard.css'

function RegisterUser(props) {
  const [registrationData, setregistrationData] = useState({
    name: '',
    email: '',
    password: '',
    verifyPassword: '',
  })
  const { setJwt } = useContext(Context)

  function handleChange(event) {
    const { name, value } = event.target
    setregistrationData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleLogin = async (e) => {
    e.preventDefault()

    if (registrationData.password != registrationData.verifyPassword) return

    const data = await makeApiCall({
      data: _.pick(registrationData, ['name', 'email', 'password']),
      api: 'api/users',
      method: 'POST',
    })
    setJwt(data.token)
    console.log(data.token)
    localStorage.setItem('linkspace_token', data.token)
    props.setAuthentication(true)
  }

  return (
    <div className="login-box">
      <form className="login-form">
        <div className="company-name">Link Space</div>
        <LoginInput
          data={{
            type: 'text',
            name: 'name',
            placeHolder: 'Name',
            validationMsg: '',
            value: registrationData.name,
          }}
          onChange={handleChange}
        />
        <LoginInput
          data={{
            type: 'text',
            name: 'email',
            placeHolder: 'Email',
            validationMsg: 'Valid email is: a@b.c',
            value: registrationData.email,
          }}
          onChange={handleChange}
        />
        <LoginInput
          data={{
            type: 'password',
            name: 'password',
            placeHolder: 'Password',
            validationMsg: 'Enter password',
            value: registrationData.password,
          }}
          onChange={handleChange}
        />
        <LoginInput
          data={{
            type: 'password',
            name: 'verifyPassword',
            placeHolder: 'Re-enter Password',
            validationMsg: 'Re-enter password',
            value: registrationData.verifyPassword,
          }}
          onChange={handleChange}
        />
        <FormButton displayName="Register" onClick={handleLogin} />
        <HelpText question="Already have an account?" answer="Sign In" to="/" />
      </form>
    </div>
  )
}

export default RegisterUser
