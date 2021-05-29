import React, { useContext, useEffect } from "react";
import { Context } from "../../Context"
import Card from "../../components/card/card.js"
import NewLinkCard from '../../components/newLinkCard/NewLinkCard'
import makeApiCall from '../../hooks/useFetch'
import "./Links.css"

function Links(props) {
    const { allLinks, setAllLinks, showNewLink, jwt } = useContext(Context)
    const LinkCards = allLinks.map(link => <Card key={link._id} link={link} />)
    useEffect(() => {
        async function getAllLinks() {
            const data = await makeApiCall({
                api: 'api/links',
                method: 'GET',
                headers: {
                    'x-auth-token': jwt
                }
            })
            setAllLinks(data)
        }
        getAllLinks()
        
    }, [])
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