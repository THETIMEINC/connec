import boxen from 'boxen'
import chalk from 'chalk'
import { wordWrap } from './word-wrap'

export function card(json: ApiUser): string {
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
      screen_name: chalk.yellow.bold(wordWrap(data_screen_name)),
      user_name: chalk.bold(`@${data.user_name}`),
      name: `${chalk.yellow.bold(wordWrap(data_screen_name))} / ${chalk.gray(
        `@${data.user_name}`,
      )}`,
      profile: chalk.white.dim(wordWrap(data_profile)),
      connec: chalk.white(`https://conn.ec/~${data.user_name}`),
      twitter: chalk.green(`https://twitter.com/${data.user_name}`),
      facebook: chalk.green(
        `https://facebook.com/${getMediaContent(data.media, 'facebook')}`,
      ),
      instagram: chalk.green(
        `https://instagram.com/${getMediaContent(data.media, 'instagram')}`,
      ),
      youtube: chalk.green(
        `https://youtube.com/${getMediaContent(data.media, 'youtube')}`,
      ),
      github: chalk.green(
        `https://github.com/${getMediaContent(data.media, 'github')}`,
      ),
      linkedin: chalk.green(
        `https://www.linkedin.com/${getMediaContent(data.media, 'linkedin')}`,
      ),
      web: chalk.green(`${getMediaContent(data.media, 'website')}`),
      labelConnec: chalk.cyan('   connec:'),
      labelTwitter: chalk.cyan('  Twitter:'),
      labelFacebook: chalk.cyan(' Facebook:'),
      labelInstagram: chalk.cyan('Instagram:'),
      labelYoutube: chalk.cyan('  YouTube:'),
      labelGithub: chalk.cyan('   GitHub:'),
      labelLinkedin: chalk.cyan(' LinkedIn:'),
      labelWeb: chalk.cyan('  Website:'),
      newline: '\n',
      spacer: ' ',
    }

    const output =
      `${valiable.screen_name}${valiable.newline}` +
      `${valiable.user_name}${valiable.newline}` +
      `${valiable.newline}` +
      `${valiable.profile}${valiable.newline}` +
      `${valiable.newline}` +
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
