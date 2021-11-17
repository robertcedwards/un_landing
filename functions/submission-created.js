require('dotenv').config()
const { EMAIL_TOKEN } = process.env
exports.handler = async event => {
  const email = JSON.parse(event.body).payload.email
  console.log(`Recieved a submission: ${email}`)
}
var request = require("request");

var options = { method: 'POST',
  url: 'https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/testingapis@hubspot.com/',
  qs: { hapikey: {EMAIL_TOKEN} },
  headers: 
   {  'Content-Type': 'application/json' },
  body: 
   { properties: 
      [ { property: 'firstname', value: 'HubSpot' },
        { property: 'email', value: {email} },
        { property: 'website', value: 'http://hubspot.com' },
        { property: 'company', value: 'HubSpot' },
        { property: 'phone', value: '555-122-2323' },
        { property: 'address', value: '25 First Street' },
        { property: 'city', value: 'Cambridge' },
        { property: 'state', value: 'MA' },
        { property: 'zip', value: '02139' } ] },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});