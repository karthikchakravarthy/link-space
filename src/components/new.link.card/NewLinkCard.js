import React, { useContext, useState } from 'react'
import { Context } from '../../Context'
import './NewLinkCard.css'
import { Button, TextField } from '@material-ui/core'
import makeApiCall from '../../hooks/useFetch'

import Popover from '../popOver/PopOver'

function NewLinkCard(props) {
  const [newLink, setnewLink] = useState({ name: '', link: '' })
  const { allLinks, setAllLinks, setShowNewLink, jwt } = useContext(Context)

  const onChangeHandler = (event) => {
    // this handler handles both name and link properties
    const { name, value } = event.target
    setnewLink({
      ...newLink,
      [name]: value,
    })
  }

  const addNewLinkHandler = async () => {
    let link = {
      name: newLink.name,
      link: newLink.link,
    }
    const data = await makeApiCall({
      api: 'api/links',
      method: 'POST',
      headers: {
        'x-auth-token': jwt,
      },
      data: link,
    })
    setShowNewLink(false)
    props.onClose && props.onClose() //to close the drawer when app in mobile
    setAllLinks([data, ...allLinks])
  }

  return (
    <div className="card">
      <div className="grid-container">
        <div className="alignCenter">
          <label> Name: </label>
        </div>
        <div>
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            name="name"
            value={newLink.name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="alignCenter">
          <label> Url: </label>
        </div>
        <div>
          <TextField
            label="Link"
            variant="outlined"
            size="small"
            fullWidth={true}
            name="link"
            value={newLink.link}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="btnContainer">
        <Button
          style={{ marginRight: 10 }}
          variant="outlined"
          onClick={() => {
            setShowNewLink(false)
            props.onClose && props.onClose() //to close the drawer when app in mobile
          }}
        >
          Cancel
        </Button>
        <Button variant="contained" onClick={addNewLinkHandler}>
          Add Link
        </Button>
      </div>
    </div>
  )
}

export default NewLinkCard
