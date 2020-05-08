'use strict';function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var fetch=_interopDefault(require('node-fetch')),chalk=_interopDefault(require('chalk')),boxen=_interopDefault(require('boxen')),ua=_interopDefault(require('universal-analytics')),uuid=require('uuid');const jWrap = require("jp-wrap")(60);

function wordWrap (text) {
  return jWrap(text);
}const chalk_colors = {
  yellow: "#FCC603",
  blue: "#1da1f2",
  cyan: "#9EFFFF",
  green: "#9BEF8A",
  magenta: "#F9618C",
  gray: "#9999aa",
  lightgray: "#dddddd",
};

const boxen_options = {
  borderStyle: {
    topLeft: "c",
    topRight: "+",
    bottomLeft: "+",
    bottomRight: "c",
    horizontal: "-",
    vertical: " ",
  },
  padding: 1,
  margin: 0,
};

function connecCard (data) {
  const getMediaContent = (media_name) => {
    const getContent = data.media.find((medium) => medium.name === media_name);

    return getContent ? getContent.content : null;
  };

  // Text style using chalk
  const valiables = {
    screen_name: chalk
      .hex(chalk_colors.yellow)
      .bold(wordWrap(data.screen_name)),
    user_name: chalk.hex(chalk_colors.lightgray)(`@${data.user_name}`),
    name: `${chalk
      .hex(chalk_colors.yellow)
      .bold(wordWrap(data.screen_name))} / ${chalk.hex(chalk_colors.lightgray)(
      `@${data.user_name}`
    )}`,
    connec: chalk.bold(`https://conn.ec/~${data.user_name}`),
    twitter: chalk.hex(chalk_colors.green)(
      `https://twitter.com/${data.user_name}`
    ),
    facebook: chalk.hex(chalk_colors.green)(
      `https://facebook.com/${getMediaContent("facebook")}`
    ),
    instagram: chalk.hex(chalk_colors.green)(
      `https://instagram.com/${getMediaContent("instagram")}`
    ),
    youtube: chalk.hex(chalk_colors.green)(
      `https://youtube.com/${getMediaContent("youtube")}`
    ),
    github: chalk.hex(chalk_colors.green)(
      `https://github.com/${getMediaContent("github")}`
    ),
    linkedin: chalk.hex(chalk_colors.green)(
      `https://www.linkedin.com/${getMediaContent("linkedin")}`
    ),
    web: chalk.hex(chalk_colors.green)(`${getMediaContent("website")}`),
    profile: chalk.hex(chalk_colors.gray)(wordWrap(data.profile)),
    labelConnec: chalk.hex(chalk_colors.cyan)("   connec:"),
    labelTwitter: chalk.hex(chalk_colors.cyan)("  Twitter:"),
    labelFacebook: chalk.hex(chalk_colors.cyan)(" Facebook:"),
    labelInstagram: chalk.hex(chalk_colors.cyan)("Instagram:"),
    labelYoutube: chalk.hex(chalk_colors.cyan)("  YouTube:"),
    labelGithub: chalk.hex(chalk_colors.cyan)("   GitHub:"),
    labelLinkedin: chalk.hex(chalk_colors.cyan)(" LinkedIn:"),
    labelWeb: chalk.hex(chalk_colors.cyan)("  Website:"),
    newline: "\n",
    spacer: " ",
  };

  const output =
    `${valiables.screen_name}${valiables.newline}` +
    `${valiables.user_name}${valiables.newline}` +
    `${valiables.newline}` +
    `${valiables.profile}${valiables.newline}` +
    // `${valiables.newline}` +
    `${valiables.connec}${valiables.newline}` +
    `${valiables.newline}` +
    `${valiables.labelTwitter}${valiables.spacer}${valiables.twitter}${valiables.newline}` +
    (getMediaContent("facebook")
      ? `${valiables.labelFacebook}${valiables.spacer}${valiables.facebook}${valiables.newline}`
      : "") +
    (getMediaContent("instagram")
      ? `${valiables.labelInstagram}${valiables.spacer}${valiables.instagram}${valiables.newline}`
      : "") +
    (getMediaContent("youtube")
      ? `${valiables.labelYoutube}${valiables.spacer}${valiables.youtube}${valiables.newline}`
      : "") +
    (getMediaContent("github")
      ? `${valiables.labelGithub}${valiables.spacer}${valiables.github}${valiables.newline}`
      : "") +
    (getMediaContent("linkedin")
      ? `${valiables.labelLinkedin}${valiables.spacer}${valiables.linkedin}${valiables.newline}`
      : "") +
    (getMediaContent("website")
      ? `${valiables.labelWeb}${valiables.spacer}${valiables.web}${valiables.newline}`
      : "");

  console.log("");
  console.log(boxen(output.trim(), boxen_options));
  console.log("");
}const myArgs = process.argv.slice(2);
// NOTE: regex similar to twitter.
const twitValid = /^@.(\w){1,15}$/;
const userparam = myArgs[0];

function getUsername () {
  return twitValid.test(userparam) ? userparam : "";
}const ua_id = "UA-78832414-6";

function visitor () {
  return ua(ua_id, uuid.v4());
}const username = getUsername();
const message = username ? `${username} is not found.` : "invalid username.";

if (!!username) {
  const url = `https://json.conn.ec/${username}`;
  const fetch_settings = { method: "get" };

  fetch(url, fetch_settings)
    .then((res) => res.json())
    .then((json) => {
      if (!json.user) return console.log(message.trim());
      connecCard(json.user);
      visitor().pageview(`/${username}`).send();
    });
} else {
  console.log(message.trim());
}