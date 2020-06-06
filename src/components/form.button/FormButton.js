import React from 'react'
import "./FormButton.css"

function FormButton(props) {
    return (
        <div className="container-login-form-btn">
            <div className="wrap-login-form-btn">
                <div className="login-form-bgbtn"></div>
                <button className="login-form-btn">
                    {props.displayName}
                </button>
            </div>
        </div>
    )
}

export default FormButton