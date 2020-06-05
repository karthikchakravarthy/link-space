import React from 'react'
import './LoginInput.css'

function inputOnBlur(e) {
    if(e.target.value != ""){
        e.target.classList.add("has-val")
    }else{
        e.target.classList.remove("has-val")
    }
}

function LoginInput(props) {
    return (
        <div class="wrap-input" data-validate="Valid email is: a@b.c">
            <input onBlur={inputOnBlur} class="input" type={props.data.type} name={props.data.name} />
            <span class="focus-input" data-placeholder={props.data.placeHolder}></span>
        </div>
    )
}

export default LoginInput