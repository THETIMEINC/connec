import fetch from 'node-fetch'
import { card } from './card'
export class Connec {
  private username: string
  _url: string

  constructor(param: string) {
    const apiHost = 'https://json.conn.ec/'
    this.username = this.setUsername(param)
    this._url = `${apiHost}${this.username}`
  }

  setUsername(param: string): string {
    // NOTE: regex similar to twitter.
    // `$ npx connec @example` or `$ npx connec example`
    const twitValid = /^(@?)(\w){1,15}$/
    const userParam = param || ''
    const target = userParam.match(twitValid)
    return target ? (target[1] ? target[0] : `@${target[0]}`) : ''
  }

  setCard(txt: string): string {
    const footer = 'try it now. 👉  https://conn.ec/'
    return `\n${txt}\n${footer}\n\n`
  }

  getErrorMessage(): string {
    return this.username
      ? `${this.username} is not found.`
      : 'invalid username.'
  }

  getUsername(): string {
    return this.username
  }

  getCard(json: ApiUser): string {
    const getCard = card(json)
    return getCard
      ? this.setCard(getCard)
      : this.setCard(this.getErrorMessage())
  }

  async getJson(): Promise<ApiUser> {
    const res = await fetch(this._url, { method: 'get' })
    const json = res.json()
    return json
  }
}
