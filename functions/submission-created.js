require('dotenv').config()
import fetch from 'node-fetch';
const { EMAIL_TOKEN } = process.env
exports.handler = async event => {
  const email = JSON.parse(event.body).payload.email
  console.log(`Recieved a submission: ${email}`)
  return fetch('https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/testingapis@hubspot.com/', {
    method: 'POST',
    qs: { hapikey: {EMAIL_TOKEN} },
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({properties: 
        [ { property: 'firstname', value: 'HubSpot' },
          { property: 'lastname', value: 'Test' },
          { property: 'website', value: 'http://hubspot.com' },
          { property: 'company', value: 'HubSpot' },
          { property: 'phone', value: '555-122-2323' },
          { property: 'address', value: '25 First Street' },
          { property: 'city', value: 'Cambridge' },
          { property: 'state', value: 'MA' },
          { property: 'zip', value: '02139' } ] }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Buttondown:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}