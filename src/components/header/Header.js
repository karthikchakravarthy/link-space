import React from "react";
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <div className="inner-header">
                <div className="logo"> Link Space</div>
                <div className="search">search</div>
                <div className="toolbar">logout</div>
            </div>
        </header>
    )
}

export default Header;