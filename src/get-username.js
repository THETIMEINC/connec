const myArgs = process.argv.slice(2)

module.exports = () => {
  // NOTE: regex similar to twitter.
  const twitValid = /^(@?)(\w){1,15}$/
  const userparam = myArgs[0] || ''
  const target = userparam.match(twitValid)

  return target ? (target[1] ? target[0] : `@${target[0]}`) : ''
}
