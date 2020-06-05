import React from 'react'
import "./FormButton.css"

function FormButton(props) {
    return (
        <div class="container-login-form-btn">
            <div class="wrap-login-form-btn">
                <div class="login-form-bgbtn"></div>
                <button class="login-form-btn">
                    {props.displayName}
                </button>
            </div>
        </div>
    )
}

export default FormButton