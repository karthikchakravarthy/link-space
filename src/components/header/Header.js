import React from "react";
import "./Header.css"

function Header(props) {
    return (
        <header className="header">
            <div className="inner-header">
                <div className="logo"> Link Space</div>
                <div className="search">search</div>
                <div onClick={() => props.setAuthentication(false)} className="toolbar">logout</div>
            </div>
        </header>
    )
}

export default Header;