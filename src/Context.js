import React, {useState} from 'react'
import {linksData} from "./linksData"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allLinks, setAllLinks] = useState(linksData.links);
    const [addLink, setAddLink] = useState(false);
    const value = {
        allLinks,
        setAllLinks,
        addLink,
        setAddLink
    }
    return (
        // <Context.Provider value={{allLinks}}>
        <Context.Provider value={value}>    
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}