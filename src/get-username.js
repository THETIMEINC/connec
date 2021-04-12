const myArgs = process.argv.slice(2)

module.exports = () => {
  // NOTE: regex similar to twitter.
  this.twitValid = /^(@?)(\w){1,15}$/
  this.userparam = myArgs[0]
  const target = this.userparam.match(this.twitValid)

  return target ? (target[1] ? target[0] : `@${target[0]}`) : ''
}
