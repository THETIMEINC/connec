#!/usr/bin/env node
import meow from 'meow'
import { Connec } from './util/connec'

const cli = meow(
  `
	Usage
	  $ npx connec <username>

	Examples
	  $ npx connec @connec

	Join us here 👉
	  https://conn.ec/`,
)

async function main() {
  const connec = new Connec(cli.input[0])
  const username = connec.getUsername()

  username
    ? console.log(connec.getCard(await connec.getJson()))
    : console.log(connec.setCard(connec.getErrorMessage()))
}

main()
