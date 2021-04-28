import React from "react";
import Card from "../card/card.js"
import "./Main.css"
import {linksData} from "../../linksData"

function Main() {
    const LinkCards = linksData.links.map(link => <Card key={link.id} link={link}/>)
    return (
        <main className="middle">
            <nav className="nav">nav</nav>
            <section className="content">
                {LinkCards}
            </section>
        </main>
    )
}

export default Main;

