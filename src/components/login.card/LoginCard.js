import React, {useContext, useState} from 'react'
import LoginInput from "../login.input/LoginInput"
import FormButton from "../form.button/FormButton"
import HelpText from "../help.text/HelpText"
import {Context} from '../../Context'
import makeApiCall from '../../hooks/useFetch'
import "./LoginCard.css"

function LoginCard(props) {
  const [loginData, setLoginData] = useState({email: '', password: ''})
  const {setJwt} = useContext(Context)

  function handleChange(event) {
    const {name, value} = event.target
    setLoginData((prevState) => ({
      ...prevState,
      [name] : value,
    }))
  }
  const handleLogin = async (e) => {
    e.preventDefault()

    const data = await makeApiCall({
      data: loginData,
      api: 'api/auth',
      method: 'POST'
    })
    setJwt(data.token)
    localStorage.setItem('linkspace_token', data.token)
    props.setAuthentication(true)
  }

  return (
    <div className="login-box">
      <form className="login-form" >
        <div className="company-name">Link Space</div>
        <LoginInput data={{type:'text', name:'email', placeHolder: 'Email', validationMsg: "Valid email is: a@b.c", value: loginData.email}} onChange={handleChange}/>
        <LoginInput data={{type:'password', name:'password', placeHolder: 'Password', validationMsg: "Enter password", value: loginData.password}} onChange={handleChange}/>
        <FormButton displayName='login' onClick={handleLogin}/>
        <HelpText question='Don’t have an account?' answer='Sign Up' to='/register'/>
      </form>
    </div>
  );
}

export default LoginCard;