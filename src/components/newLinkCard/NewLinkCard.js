import React, { useContext, useState } from "react"
import { Context } from "../../Context"
import "./NewLinkCard.css"

function NewLinkCard() {
  const [newLink, setnewLink] = useState({ name: '', link: '' });
  const { allLinks, setAllLinks, setShowNewLink } = useContext(Context);

  const onChangeHandler = (event) => {
    // this handler handles both name and link properties
    const {name, value} = event.target
    setnewLink({
      ...newLink,
      [name]: value 
    })
  }

  const addNewLinkHandler = () => {
    let link = {
      name: newLink.name,
      link: newLink.link,
    }
    
    fetch('http://localhost:3050/api/links', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(link),
    })
      .then((response) => {
        if (response.ok) {
          setShowNewLink(false);
          response.json().then(newLink => {
            setAllLinks([newLink, ...allLinks]);
          })
        } else {
          response.text().then(err => console.error(err))
        }
      })
  }
  return (
    <div className='card'>
      <label> Name:
            <input
          type='text'
          name='name'
          value={newLink.name}
          onChange={onChangeHandler}
        />
      </label>
      <label> Url:
            <input
          type='text'
          name='link'
          value={newLink.link}
          onChange={onChangeHandler}
        />
      </label>
      <input
        type='button'
        value='Add Link'
        onClick={addNewLinkHandler}
      />
    </div>
  )
}

export default NewLinkCard;