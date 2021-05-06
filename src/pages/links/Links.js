import React, {useContext} from "react";
import {Context} from "../../Context"
import Card from "../../components/card/card.js"
import "./Links.css"
import AddNewLink from '../../components/addNewLink/AddNewLink'
function Links(props) {
    const {allLinks, addLink} = useContext(Context)
    const LinkCards = allLinks.map(link => <Card key={link.id} link={link}/>)
    return (
        <main className="middle">
            <nav className="nav">nav</nav>
            <section className="content">
            {addLink?<AddNewLink/>: null}
                {LinkCards}
            </section>
        </main>
    )
}

export default Links;