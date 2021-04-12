#!/usr/bin/env node
const fetch = require('node-fetch')
const connecCard = require('./connec-card')
const getUsername = require('./get-username')
const visitor = require('./connec-ga')
const meow = require('meow')

const username = getUsername()
const message = username ? `${username} is not found.` : 'invalid username.'
const footer = 'try it now. 👉  https://conn.ec/'

const cli = meow(
  `
	Usage
	  $ npx connec <username>

	Examples
	  $ npx connec @connec

	Join us here 👉
	  https://conn.ec/
`,
  {
    flags: {},
  },
)

const invalidCard = () => {
  console.log('')
  console.log(message.trim())
  console.log(footer)
  console.log('')
}

const validCard = (txt = '') => {
  console.log('')
  console.log(txt)
  console.log(footer)
  console.log('')
}

if (!!username) {
  const apiUrl = `https://json.conn.ec/${username}`

  fetch(apiUrl, { method: 'get' })
    .then((res) => res.json())
    .then((json) => {
      if (!json.user) return invalidCard()
      validCard(connecCard(json.user))
      visitor().pageview(`/${username}`).send()
    })
} else {
  invalidCard()
}
