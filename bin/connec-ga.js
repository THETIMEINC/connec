const ua = require("universal-analytics");
const { v4: uuidv4 } = require("uuid");
const ua_id = "UA-78832414-6";

module.exports = () => {
  return ua(ua_id, uuidv4());
};
