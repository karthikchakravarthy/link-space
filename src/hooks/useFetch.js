import _ from 'lodash'

const domain = 'http://192.168.0.221:3050/'

async function makeApiCall({ data, api, method, headers }) {
  const response = await fetch(`${domain}${api}`, {
    method: method,
    headers: _.extend(
      {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      headers
    ),
    body: JSON.stringify(data),
  })
  return await response.json()
}

export default makeApiCall

// .then((response) => {
//     if (response.ok) {
//         response.json().then(jwt => {

//             setJwt(jwt.token)
//             console.log(jwt.token)
//             localStorage.setItem('linkspace_token', jwt.token)
//             props.setAuthentication(true)
//         })
//     } else {
//         response.text().then(err => console.error(err))
//     }
// })
