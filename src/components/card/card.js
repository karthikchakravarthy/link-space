import React, {useContext, useState} from "react"
import Popover from '../popOver/PopOver';
import {Button, TextField} from '@material-ui/core';
import { Context } from "../../Context";
import makeApiCall from '../../hooks/useFetch'
import "./Card.css"

function Card({link}) {
    const [isEditable, setIsEditable] = useState(false);
    const [newLink, setnewLink] = useState({ name: link.name, link: link.link });
    const {allLinks, setAllLinks, jwt} = useContext(Context);
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
    const onDelete = async () => {
      const deletedLink = await makeApiCall({
        api: `api/links/${link._id}`,
        method: 'DELETE',
        headers: {
          'x-auth-token': jwt
        }
      })
      let updatedLinks = allLinks.filter((link)=>{
        return deletedLink._id!=link._id;
      })
      setAllLinks(updatedLinks);
    }
    
    const onUpdate = async () => {
      const updatedLink = await makeApiCall({
        api: `api/links/${link._id}`,
        method: 'PUT',
        headers: {
          'x-auth-token': jwt
        },
        data: newLink
      })

      let updatedLinks = 
        allLinks.map((linkData)=>{
          if(linkData._id === updatedLink._id){
            return {
              _id: updatedLink._id,
              name : updatedLink.name,
              link: updatedLink.link,
            }
          }
          return linkData       
        })
        console.log(updatedLinks);
        setAllLinks(updatedLinks);
        setIsEditable(false);
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