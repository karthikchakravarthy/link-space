import React from 'react'
import "./HelpText.css"

function HelpText(props) {
    return (
        <div class="text-center">
            <span class="txt1">{props.question}</span>
            <a class="txt2" href="#">{props.answer}</a>
        </div>
    )
}

export default HelpText