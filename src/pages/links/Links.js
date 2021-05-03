import React from "react";
import Card from "../../components/card/card.js"
import "./Links.css"
import {linksData} from "../../linksData"

function Links() {
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

export default Links;