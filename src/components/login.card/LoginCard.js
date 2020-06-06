import React, {useState} from 'react'
import LoginInput from "../login.input/LoginInput"
import FormButton from "../form.button/FormButton"
import HelpText from "../help.text/HelpText"
import "./LoginCard.css"

function LoginCard(props) {
  const [login, setLogin] = useState(true),
  options = {};

  function onSubmit(e){
    e.preventDefault();
    var inputs = document.querySelectorAll('.validate-input input')
    var check = true;

    for(var i=0; i<inputs.length; i++) {
      if(inputs[i].name === 'pass') {
        options.pass = inputs[i];
      }
      if(inputs[i].name === 'verifypass') {
        options.verifypass = inputs[i];
      }
      if(validate(inputs[i]) === false){
        showValidate(inputs[i]);
        check=false;
      }
    }

    if(options.verifypass && (options.pass.value !== options.verifypass.value)){
      check=false;
      showValidate(options.verifypass);
    }
    
    if(check){
      props.setAuthentication(true);
    }
  }

  function onFocus(e){
    hideValidate(e.target);
  }

  function hideValidate(input) {
    var thisAlert = input.parentElement;
    thisAlert.classList.remove('alert-validate');
  }

  function validate (input) {
    if(input.type === 'email' || input.name === 'email') {
      if(input.value.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        return false;
      }
    }
    else {
      if(input.value.trim() === ''){
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = input.parentElement;
    thisAlert.classList.add('alert-validate');
  }

  return (
    <div className="login-box">
      <form className="login-form" onSubmit = {onSubmit} >
        <div className="company-name">Link Space</div>

        <LoginInput onFocus= {onFocus} data={{type:'text', name:'email', placeHolder: 'Email', validationMsg: "Valid email is: a@b.c"}}/>
        <LoginInput onFocus= {onFocus} data={{type:'password', name:'pass', placeHolder: 'Password', validationMsg: "Enter password"}}/>
        {!login && <LoginInput onFocus= {onFocus} data={{type:'password', name:'verifypass', placeHolder: 'Re Enter Password', validationMsg: " Password doesn't match"}}/>}

        {login && <FormButton  displayName='login' />}
        {!login && <FormButton displayName='sign up' />}

        {login &&<HelpText login={true} setLogin={setLogin} question='Don’t have an account?' answer='Sign Up' />}
        {!login &&<HelpText login={false} setLogin={setLogin} question='Already have an account?' answer='Sign In' />}
      </form>
    </div>
  );
}

export default LoginCard;