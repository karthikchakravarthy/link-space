const rootUrl = 'http://localhost:3050/'
export const postUpdatedLink = (links, modifiedLink, id) => {
    return new Promise(function(resolve, reject){
        fetch(rootUrl + 'api/links', {
            method: 'PATCH',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({...modifiedLink, id: id.toString()}),
         }).then((response) => {
            if (response.ok) {
                response.json().then(updatedLink => {
                 let updatedLinks = 
                 links.map((linkData)=>{
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
                 resolve(updatedLinks);
              })
              }
              else {
                response.text().then(err => console.error(err))
              }
            
         }).catch(error => { 
             reject(error);
         })
    })
}
