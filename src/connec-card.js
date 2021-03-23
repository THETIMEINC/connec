const chalk = require('chalk')
const boxen = require('boxen')
const wordWrap = require('./word-wrap')

module.exports = (data) => {
  this.chalk_colors = {
    yellow: '#FCC603',
    blue: '#1da1f2',
    cyan: '#9EFFFF',
    green: '#9BEF8A',
    magenta: '#F9618C',
    gray: '#9999aa',
    lightgray: '#dddddd',
  }

  this.boxen_options = {
    borderStyle: {
      topLeft: 'c',
      topRight: '+',
      bottomLeft: '+',
      bottomRight: 'c',
      horizontal: '-',
      vertical: ' ',
    },
    padding: 1,
    margin: 0,
  }

  this.getMediaContent = (media_name) => {
    const getContent = data.media.find((medium) => medium.name === media_name)

    return getContent ? getContent.content : null
  }

  // Text style using chalk
  this.valiables = {
    screen_name: chalk
      .hex(this.chalk_colors.yellow)
      .bold(wordWrap(data.screen_name)),
    user_name: chalk.hex(this.chalk_colors.lightgray)(`@${data.user_name}`),
    name: `${chalk
      .hex(this.chalk_colors.yellow)
      .bold(wordWrap(data.screen_name))} / ${chalk.hex(
      this.chalk_colors.lightgray,
    )(`@${data.user_name}`)}`,
    connec: chalk.bold(`https://conn.ec/~${data.user_name}`),
    twitter: chalk.hex(this.chalk_colors.green)(
      `https://twitter.com/${data.user_name}`,
    ),
    facebook: chalk.hex(this.chalk_colors.green)(
      `https://facebook.com/${this.getMediaContent('facebook')}`,
    ),
    instagram: chalk.hex(this.chalk_colors.green)(
      `https://instagram.com/${this.getMediaContent('instagram')}`,
    ),
    youtube: chalk.hex(this.chalk_colors.green)(
      `https://youtube.com/${this.getMediaContent('youtube')}`,
    ),
    github: chalk.hex(this.chalk_colors.green)(
      `https://github.com/${this.getMediaContent('github')}`,
    ),
    linkedin: chalk.hex(this.chalk_colors.green)(
      `https://www.linkedin.com/${this.getMediaContent('linkedin')}`,
    ),
    web: chalk.hex(this.chalk_colors.green)(
      `${this.getMediaContent('website')}`,
    ),
    profile: chalk.hex(this.chalk_colors.gray)(wordWrap(data.profile)),
    labelConnec: chalk.hex(this.chalk_colors.cyan)('   connec:'),
    labelTwitter: chalk.hex(this.chalk_colors.cyan)('  Twitter:'),
    labelFacebook: chalk.hex(this.chalk_colors.cyan)(' Facebook:'),
    labelInstagram: chalk.hex(this.chalk_colors.cyan)('Instagram:'),
    labelYoutube: chalk.hex(this.chalk_colors.cyan)('  YouTube:'),
    labelGithub: chalk.hex(this.chalk_colors.cyan)('   GitHub:'),
    labelLinkedin: chalk.hex(this.chalk_colors.cyan)(' LinkedIn:'),
    labelWeb: chalk.hex(this.chalk_colors.cyan)('  Website:'),
    newline: '\n',
    spacer: ' ',
    footer: 'try it now. 👉  https://conn.ec/',
  }

  const output =
    `${this.valiables.screen_name}${this.valiables.newline}` +
    `${this.valiables.user_name}${this.valiables.newline}` +
    `${this.valiables.newline}` +
    `${this.valiables.profile}${this.valiables.newline}` +
    // `${this.valiables.newline}` +
    `${this.valiables.connec}${this.valiables.newline}` +
    `${this.valiables.newline}` +
    `${this.valiables.labelTwitter}${this.valiables.spacer}${this.valiables.twitter}${this.valiables.newline}` +
    (this.getMediaContent('facebook')
      ? `${this.valiables.labelFacebook}${this.valiables.spacer}${this.valiables.facebook}${this.valiables.newline}`
      : '') +
    (this.getMediaContent('instagram')
      ? `${this.valiables.labelInstagram}${this.valiables.spacer}${this.valiables.instagram}${this.valiables.newline}`
      : '') +
    (this.getMediaContent('youtube')
      ? `${this.valiables.labelYoutube}${this.valiables.spacer}${this.valiables.youtube}${this.valiables.newline}`
      : '') +
    (this.getMediaContent('github')
      ? `${this.valiables.labelGithub}${this.valiables.spacer}${this.valiables.github}${this.valiables.newline}`
      : '') +
    (this.getMediaContent('linkedin')
      ? `${this.valiables.labelLinkedin}${this.valiables.spacer}${this.valiables.linkedin}${this.valiables.newline}`
      : '') +
    (this.getMediaContent('website')
      ? `${this.valiables.labelWeb}${this.valiables.spacer}${this.valiables.web}${this.valiables.newline}`
      : '')

  console.log('')
  console.log(boxen(output.trim(), this.boxen_options))
  console.log(this.valiables.footer)
  console.log('')
}
