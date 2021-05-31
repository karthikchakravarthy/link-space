import React from 'react'
import { Link } from 'react-router-dom'
import './HelpText.css'

function HelpText(props) {
  return (
    <div className="text-center">
      <span className="txt1">{props.question}</span>
      <Link to={props.to}>
        <button className="txt2">{props.answer}</button>
      </Link>
    </div>
  )
}

export default HelpText
