import React from "react"
import "./Card.css"

function Card({link}) {
    return (
        <div className='card'>
            <h3>{link.name}</h3>
            <a href={link.link}>{link.link}</a>
        </div>
    )
}

export default Card;