#!/usr/bin/env node
const fetch = require("node-fetch");
const jpWrap = require("jp-wrap");
const chalk = require("chalk");
const boxen = require("boxen");

// setting
const fetch_settings = { method: "get" };
const jwrap = new jpWrap(60);
const chalk_colors = {
  yellow: "#FCC603",
  blue: "#1da1f2",
  cyan: "#9EFFFF",
  green: "#9BEF8A",
  magenta: "#F9618C",
  gray: "#9999aa",
  lightgray: "#dddddd"
};
const boxen_options = {
  borderStyle: {
    topLeft: "c",
    topRight: "+",
    bottomLeft: "+",
    bottomRight: "c",
    horizontal: "-",
    vertical: " "
  },
  padding: 1,
  margin: 0
};
const myArgs = process.argv.slice(2);
const user = myArgs[0] || "@connec_ppl";
const url = `https://json.conn.ec/${user}`;
const message =
  `${user} is not found...\n\nGet Started for Free.\n` +
  chalk.hex(chalk_colors.yellow).bold(`https://conn.ec/`);

fetch(url, fetch_settings)
  .then(res => res.json())
  .then(json => {
    if (!json.user) return console.log(boxen(message.trim(), boxen_options));

    const getMediaContent = media_name => {
      const getContent = json.user.media.find(
        medium => medium.name === media_name
      );

      return getContent ? getContent.content : null;
    };

    // Text style using chalk
    const data = {
      screen_name: chalk
        .hex(chalk_colors.yellow)
        .bold(jwrap(json.user.screen_name)),
      user_name: chalk.hex(chalk_colors.lightgray)(`@${json.user.user_name}`),
      name: `${chalk
        .hex(chalk_colors.yellow)
        .bold(jwrap(json.user.screen_name))} / ${chalk.hex(
        chalk_colors.lightgray
      )(`@${json.user.user_name}`)}`,
      connec: chalk.bold(`https://conn.ec/~${json.user.user_name}`),
      twitter: chalk.hex(chalk_colors.green)(
        `https://twitter.com/${json.user.user_name}`
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
      profile: chalk.hex(chalk_colors.gray)(jwrap(json.user.profile)),
      labelConnec: chalk.hex(chalk_colors.cyan)("   connec:"),
      labelTwitter: chalk.hex(chalk_colors.cyan)("  Twitter:"),
      labelFacebook: chalk.hex(chalk_colors.cyan)(" Facebook:"),
      labelInstagram: chalk.hex(chalk_colors.cyan)("Instagram:"),
      labelYoutube: chalk.hex(chalk_colors.cyan)("  YouTube:"),
      labelGithub: chalk.hex(chalk_colors.cyan)("   GitHub:"),
      labelLinkedin: chalk.hex(chalk_colors.cyan)(" LinkedIn:"),
      labelWeb: chalk.hex(chalk_colors.cyan)("  Website:"),
      newline: "\n",
      spacer: " "
    };

    const output =
      `${data.screen_name}${data.newline}` +
      `${data.user_name}${data.newline}` +
      `${data.newline}` +
      `${data.profile}${data.newline}` +
      // `${data.newline}` +
      `${data.connec}${data.newline}` +
      `${data.newline}` +
      `${data.labelTwitter}${data.spacer}${data.twitter}${data.newline}` +
      (getMediaContent("facebook")
        ? `${data.labelFacebook}${data.spacer}${data.facebook}${data.newline}`
        : "") +
      (getMediaContent("instagram")
        ? `${data.labelInstagram}${data.spacer}${data.instagram}${data.newline}`
        : "") +
      (getMediaContent("youtube")
        ? `${data.labelYoutube}${data.spacer}${data.youtube}${data.newline}`
        : "") +
      (getMediaContent("github")
        ? `${data.labelGithub}${data.spacer}${data.github}${data.newline}`
        : "") +
      (getMediaContent("linkedin")
        ? `${data.labelLinkedin}${data.spacer}${data.linkedin}${data.newline}`
        : "") +
      (getMediaContent("website")
        ? `${data.labelWeb}${data.spacer}${data.web}${data.newline}`
        : "");

    console.log("");
    console.log(boxen(output.trim(), boxen_options));
    console.log("");
  });
