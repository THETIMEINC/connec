#!/usr/bin/env node
const fetch = require("node-fetch");
const connecCard = require("./connec-card");
const getUsername = require("./get-username");
const visitor = require("./connec-ga");

const username = getUsername();
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
