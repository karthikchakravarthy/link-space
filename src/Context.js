import React, {useState} from 'react'
import {linksData} from "./linksData"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allLinks, setAllLinks] = useState(linksData.links)
    return (
        <Context.Provider value={{allLinks}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}