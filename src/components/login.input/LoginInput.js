import React from 'react'
import './LoginInput.css'


function LoginInput(props) {

    function inputOnBlur(e) {
        if(e.target.value !== ""){
            e.target.classList.add("has-val")
        }else{
            e.target.classList.remove("has-val")
        }
    }

    return (
        <div className="wrap-input validate-input" data-validate= {props.data.validationMsg}>
            <input onFocus= {props.onFocus} onBlur={inputOnBlur} className="input" type={props.data.type} name={props.data.name} />
            <span className="focus-input" data-placeholder={props.data.placeHolder}></span>
        </div>
    )
}

export default LoginInput