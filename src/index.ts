#!/usr/bin/env node
import meow from 'meow'
import { Connec } from './lib/connec'
import { HttpClient } from './lib/http-client'

const apiHost = 'https://json.conn.ec/'
const cli = meow(
  `
	Usage
	  $ npx connec <username>

	Examples
	  $ npx connec @connec

	Join us here 👉
	  https://conn.ec/`,
)

async function getConnec() {
  const connec = new Connec(cli.input[0])

  const client = new HttpClient({
    url: `${apiHost}${connec.getUsername()}`,
  })

  const json = await client.getJson()

  console.log(connec.getCard(json))
}

getConnec()
