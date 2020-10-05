const myArgs = process.argv.slice(2);

module.exports = () => {
  // NOTE: regex similar to twitter.
  this.twitValid = /^@.(\w){1,15}$/;
  this.userparam = myArgs[0];

  return this.twitValid.test(this.userparam) ? this.userparam : "";
};
