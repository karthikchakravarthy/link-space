import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    const [allLinks, setAllLinks] = useState([])
    const [addLink, setAddLink] = useState(false);
    const value = {
        allLinks,
        setAllLinks,
        addLink,
        setAddLink
    }
    
    useEffect(()=> {
        fetch('http://localhost:3050/api/links')
        .then(res => res.json())
        .then(data => setAllLinks(data))
    }, [])
    return (
        // <Context.Provider value={{allLinks}}>
        <Context.Provider value={value}>    
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}