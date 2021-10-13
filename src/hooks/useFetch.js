import _ from 'lodash'

const domain = 'http://192.168.0.221:3050/'

async function makeApiCall({ data, api, method, headers }) {
  try {
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
    if (response.ok) return response.json()
    else {
      const error = await response.text()
      throw new Error(error)
    }
  } catch (ex) {
    throw ex
  }
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
