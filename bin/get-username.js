const myArgs = process.argv.slice(2);
// NOTE: regex similar to twitter.
const twitValid = /^@.(\w){1,15}$/;
const userparam = myArgs[0];

module.exports = () => {
  return twitValid.test(userparam) ? userparam : "";
};
