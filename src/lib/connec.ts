import { card } from './card'
export class Connec {
  private username: string

  constructor(param: string) {
    this.username = this.setUsername(param)
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

  getErrorMessage(userName: string): string {
    return userName ? `${userName} is not found.` : 'invalid username.'
  }

  getUsername(): string {
    return this.username
  }

  getCard(json: ApiUser): string {
    const getCard = card(json)
    return getCard
      ? this.setCard(getCard)
      : this.setCard(this.getErrorMessage(this.username))
  }
}
