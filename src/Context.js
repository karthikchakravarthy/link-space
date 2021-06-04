import React, { useState, useEffect } from 'react'

const Context = React.createContext()

function ContextProvider({ children }) {
  const storedJwt = localStorage.getItem('linkspace_token')
  const [jwt, setJwt] = useState(storedJwt || null)
  const [allLinks, setAllLinks] = useState([])
  const [showNewLink, setShowNewLink] = useState(false)
  const [toastData, setToastData] = useState({
    message: '',
    open: false,
    severity: 'error',
  })
  const value = {
    allLinks,
    setAllLinks,
    showNewLink,
    setShowNewLink,
    jwt,
    setJwt,
    toastData,
    setToastData,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export { ContextProvider, Context }
