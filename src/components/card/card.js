import React, {useContext, useState} from "react"
import "./Card.css"
import Popover from '../popOver/PopOver';
import {Button, TextField} from '@material-ui/core';
import { Context } from "../../Context";
function Card({link}) {
    const [isEditable, setIsEditable] = useState(false);
    const [newLink, setnewLink] = useState({ name: link.name, link: link.link });
    const {allLinks,setAllLinks} = useContext(Context);
    const onChangeHandler = (event) => {
        // this handler handles both name and link properties
        const {name, value} = event.target
        setnewLink({
          ...newLink,
          [name]: value 
        })
      } 
    const onEdit = () => {
        setIsEditable(true);
    }
    const onDelete = () => {
        fetch('http://localhost:3050/api/links', {
           method: 'DELETE',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           },
           body: JSON.stringify(link),
        })
         .then((response) => {
          if (response.ok) {
            response.json().then(deletedLink => {
              let updatedLinks = allLinks.filter((link)=>{
                 return deletedLink.id!=link.id;
              })
            setAllLinks(updatedLinks);
          })
          } else {
          response.text().then(err => console.error(err))
          }
         })
    }
    
    const onUpdate = () => {
        fetch('http://localhost:3050/api/links', {
           method: 'PATCH',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({...newLink, id: link.id}),
        })
         .then((response) => {
           if (response.ok) {
             response.json().then(updatedLink => {
              let updatedLinks = 
              allLinks.map((linkData)=>{
                     if(linkData.id === updatedLink.id)
                     {
                         return {
                                  id: updatedLink.id,
                                  name : updatedLink.name,
                                  link: updatedLink.link,
                                }
                    }
                    return linkData       
              })
              console.log(updatedLinks);
              setAllLinks(updatedLinks);
              setIsEditable(false);
            
           })
           } else {
          response.text().then(err => console.error(err))
        }
      })
    }

    const onCancel = () => {
        setIsEditable(false);
    }
      
    return (
        <div className='card'>
          {
            isEditable?
             (
              <div className='editable'>
                <div>   
                  <TextField  label="Name" variant="outlined" size='small'
                    name='name' value={newLink.name} onChange={onChangeHandler}
                  />
                </div> 
                <div>   
                  <TextField  label="Link" variant="outlined" size='small' fullWidth={true}
                    name='link' value={newLink.link} onChange={onChangeHandler}
                  />
                </div>
                <div className='btnContainer'>
                  <Button style={{marginRight: 10}} variant="outlined"  onClick={onCancel}>
                      Close
                  </Button>
                  <Button variant="contained" onClick={onUpdate}>
                      Update Link
                  </Button>
                </div>
              </div>
                )
                :
                (
                 <>
                   <div style={{float: 'right'}}>
                      <Popover edit={onEdit} delete={onDelete}/>
                   </div>
                   <h3>{link.name}</h3>
                   <a href={link.link} target="_blank">{link.link}</a>
                 </>
                )

            }
            
        </div>
    )
}

export default Card;