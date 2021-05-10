import boxen from 'boxen'
import chalk from 'chalk'
import { wordWrap } from './word-wrap'

export function card(json: ApiUser): string {
  const chalkColors = {
    yellow: '#FCC603',
    blue: '#1da1f2',
    cyan: '#9EFFFF',
    green: '#9BEF8A',
    magenta: '#F9618C',
    gray: '#9999aa',
    lightGray: '#dddddd',
  }

  const boxenOption = {
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

  function getMediaContent(media: Array<Media>, mediaName: string): string {
    const getContent = media.find((medium) => medium.name === mediaName)
    return getContent ? getContent.content : ''
  }

  function setCardFormat(data: User) {
    // Text style using chalk
    const data_screen_name = data.screen_name || ' '
    const data_profile = data.profile || ' '

    const valiable = {
      screen_name: chalk
        .hex(chalkColors.yellow)
        .bold(wordWrap(data_screen_name)),
      user_name: chalk.hex(chalkColors.lightGray)(`@${data.user_name}`),
      name: `${chalk
        .hex(chalkColors.yellow)
        .bold(wordWrap(data_screen_name))} / ${chalk.hex(chalkColors.lightGray)(
        `@${data.user_name}`,
      )}`,
      connec: chalk.bold(`https://conn.ec/~${data.user_name}`),
      twitter: chalk.hex(chalkColors.green)(
        `https://twitter.com/${data.user_name}`,
      ),
      facebook: chalk.hex(chalkColors.green)(
        `https://facebook.com/${getMediaContent(data.media, 'facebook')}`,
      ),
      instagram: chalk.hex(chalkColors.green)(
        `https://instagram.com/${getMediaContent(data.media, 'instagram')}`,
      ),
      youtube: chalk.hex(chalkColors.green)(
        `https://youtube.com/${getMediaContent(data.media, 'youtube')}`,
      ),
      github: chalk.hex(chalkColors.green)(
        `https://github.com/${getMediaContent(data.media, 'github')}`,
      ),
      linkedin: chalk.hex(chalkColors.green)(
        `https://www.linkedin.com/${getMediaContent(data.media, 'linkedin')}`,
      ),
      web: chalk.hex(chalkColors.green)(
        `${getMediaContent(data.media, 'website')}`,
      ),
      profile: chalk.hex(chalkColors.gray)(wordWrap(data_profile)),
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
      (getMediaContent(data.media, 'facebook')
        ? `${valiable.labelFacebook}${valiable.spacer}${valiable.facebook}${valiable.newline}`
        : '') +
      (getMediaContent(data.media, 'instagram')
        ? `${valiable.labelInstagram}${valiable.spacer}${valiable.instagram}${valiable.newline}`
        : '') +
      (getMediaContent(data.media, 'youtube')
        ? `${valiable.labelYoutube}${valiable.spacer}${valiable.youtube}${valiable.newline}`
        : '') +
      (getMediaContent(data.media, 'github')
        ? `${valiable.labelGithub}${valiable.spacer}${valiable.github}${valiable.newline}`
        : '') +
      (getMediaContent(data.media, 'linkedin')
        ? `${valiable.labelLinkedin}${valiable.spacer}${valiable.linkedin}${valiable.newline}`
        : '') +
      (getMediaContent(data.media, 'website')
        ? `${valiable.labelWeb}${valiable.spacer}${valiable.web}${valiable.newline}`
        : '')
    return output
  }

  if (json.user) {
    return boxen(setCardFormat(json.user), boxenOption)
  }
  return ''
}
