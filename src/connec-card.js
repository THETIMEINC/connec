const chalk = require('chalk')
const boxen = require('boxen')
const wordWrap = require('./word-wrap')

module.exports = (data) => {
  const chalkColors = {
    yellow: '#FCC603',
    blue: '#1da1f2',
    cyan: '#9EFFFF',
    green: '#9BEF8A',
    magenta: '#F9618C',
    gray: '#9999aa',
    lightGray: '#dddddd',
  }

  const boxenOptions = {
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

  const getMediaContent = (media_name) => {
    const getContent = data.media.find((medium) => medium.name === media_name)

    return getContent ? getContent.content : null
  }

  // Text style using chalk
  const valiable = {
    screen_name: chalk.hex(chalkColors.yellow).bold(wordWrap(data.screen_name)),
    user_name: chalk.hex(chalkColors.lightGray)(`@${data.user_name}`),
    name: `${chalk
      .hex(chalkColors.yellow)
      .bold(wordWrap(data.screen_name))} / ${chalk.hex(chalkColors.lightGray)(
      `@${data.user_name}`,
    )}`,
    connec: chalk.bold(`https://conn.ec/~${data.user_name}`),
    twitter: chalk.hex(chalkColors.green)(
      `https://twitter.com/${data.user_name}`,
    ),
    facebook: chalk.hex(chalkColors.green)(
      `https://facebook.com/${getMediaContent('facebook')}`,
    ),
    instagram: chalk.hex(chalkColors.green)(
      `https://instagram.com/${getMediaContent('instagram')}`,
    ),
    youtube: chalk.hex(chalkColors.green)(
      `https://youtube.com/${getMediaContent('youtube')}`,
    ),
    github: chalk.hex(chalkColors.green)(
      `https://github.com/${getMediaContent('github')}`,
    ),
    linkedin: chalk.hex(chalkColors.green)(
      `https://www.linkedin.com/${getMediaContent('linkedin')}`,
    ),
    web: chalk.hex(chalkColors.green)(`${getMediaContent('website')}`),
    profile: chalk.hex(chalkColors.gray)(wordWrap(data.profile)),
    labelConnec: chalk.hex(chalkColors.cyan)('   connec:'),
    labelTwitter: chalk.hex(chalkColors.cyan)('  Twitter:'),
    labelFacebook: chalk.hex(chalkColors.cyan)(' Facebook:'),
    labelInstagram: chalk.hex(chalkColors.cyan)('Instagram:'),
    labelYoutube: chalk.hex(chalkColors.cyan)('  YouTube:'),
    labelGithub: chalk.hex(chalkColors.cyan)('   GitHub:'),
    labelLinkedin: chalk.hex(chalkColors.cyan)(' LinkedIn:'),
    labelWeb: chalk.hex(chalkColors.cyan)('  Website:'),
    newline: '\n',
    spacer: ' ',
  }

  const output =
    `${valiable.screen_name}${valiable.newline}` +
    `${valiable.user_name}${valiable.newline}` +
    `${valiable.newline}` +
    `${valiable.profile}${valiable.newline}` +
    // `${valiable.newline}` +
    `${valiable.connec}${valiable.newline}` +
    `${valiable.newline}` +
    `${valiable.labelTwitter}${valiable.spacer}${valiable.twitter}${valiable.newline}` +
    (getMediaContent('facebook')
      ? `${valiable.labelFacebook}${valiable.spacer}${valiable.facebook}${valiable.newline}`
      : '') +
    (getMediaContent('instagram')
      ? `${valiable.labelInstagram}${valiable.spacer}${valiable.instagram}${valiable.newline}`
      : '') +
    (getMediaContent('youtube')
      ? `${valiable.labelYoutube}${valiable.spacer}${valiable.youtube}${valiable.newline}`
      : '') +
    (getMediaContent('github')
      ? `${valiable.labelGithub}${valiable.spacer}${valiable.github}${valiable.newline}`
      : '') +
    (getMediaContent('linkedin')
      ? `${valiable.labelLinkedin}${valiable.spacer}${valiable.linkedin}${valiable.newline}`
      : '') +
    (getMediaContent('website')
      ? `${valiable.labelWeb}${valiable.spacer}${valiable.web}${valiable.newline}`
      : '')

  return boxen(output.trim(), boxenOptions)
}
