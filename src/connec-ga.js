const ua = require('universal-analytics')
const { v4: uuidv4 } = require('uuid')

module.exports = () => {
  const ua_id = 'UA-78832414-6'

  return ua(ua_id, uuidv4())
}
