import React, { useContext } from "react";
import { Context } from "../../Context"
import Card from "../../components/card/card.js"
import NewLinkCard from '../../components/newLinkCard/NewLinkCard'
import "./Links.css"

function Links(props) {
    const { allLinks, showNewLink } = useContext(Context)
    const LinkCards = allLinks.map(link => <Card key={link.id} link={link} />)
    return (
        <main className="middle">
            <nav className="nav">nav</nav>
            <section className="content">
                {/* added below div to hide for mobile scenario */}
                <div className='newLink'>
                  {showNewLink ? <NewLinkCard /> : null}
                </div>
                {LinkCards}
            </section>
        </main>
    )
}

export default Links;