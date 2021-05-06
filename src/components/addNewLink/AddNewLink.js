import React, { useContext, useState } from "react"
import "./AddNewLink.css"
import {Context} from "../../Context"
function AddNewLink({link}) {
    const [linkData,setLinkData] = useState({name:'', link: ''});
    const {allLinks, setAllLinks, setAddLink} = useContext(Context);
    
    const linkNameHandler = (event) => {
         setLinkData({...linkData,[event.target.name]:event.target.value});
      }
    
    // const linkUrlHandler = (event) => {
    //     setLinkData((state)=>({...state,link: event.target.value}));
    //   }  
    
    const handleAddLink = () => {
        let linkSize = allLinks.length;
        let newLink = {
            id: linkSize,
            name: linkData.name,
            link: linkData.link,
        }
        setAddLink(false);
        setAllLinks([newLink, ...allLinks]);
    }
    return (
        <div className='card'>
            <div>
            <label>
              Link Name: <input
                type='text'
                name='name'
                value={linkData.name}
                onChange={linkNameHandler}
              />
            </label>
            </div>
            <div>
            <label>
              Link Url: 
            <input
                type='text'
                name='link'
                value={linkData.link}
                onChange={linkNameHandler}
              />
            </label>
            </div>
            <div>
            <input
                type='submit'
                onClick={handleAddLink}
              />
            </div>
        </div>
    )
}

export default AddNewLink;