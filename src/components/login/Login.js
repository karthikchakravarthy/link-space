import React from 'react'
import LoginInput from "../login.input/LoginInput"
import FormButton from "../form.button/FormButton"
import HelpText from "../help.text/HelpText"
import "./Login.css"

function Login() {
  var login = false;
  return (
        <div className="login-box">
            <form className="login-form">
                <div className="company-name">Link Space</div>
                <LoginInput data={{type:'text', name:'email', placeHolder: 'Email'}}/>
                <LoginInput data={{type:'password', name:'pass', placeHolder: 'Password'}}/>
                {!login && <LoginInput data={{type:'password', name:'pass', placeHolder: 'Re Enter Password'}}/>}
                {login && <FormButton displayName='login' />}
                {login &&<HelpText question='Don’t have an account?' answer='Sign Up' />}
                {!login && <FormButton displayName='sign up' />}
                {!login &&<HelpText question='Already have an account?' answer='Sign In' />}
            </form>
        </div>
  );
}

export default Login;