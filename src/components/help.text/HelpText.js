import React from 'react'
import "./HelpText.css"

function HelpText(props) {
    return (
        <div className="text-center">
            <span className="txt1">{props.question}</span>
            <button onClick={() => props.setLogin(!props.login)} className="txt2" href="#">{props.answer}</button>
        </div>
    )
}

export default HelpText