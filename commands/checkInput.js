module.exports = {
  command: function(selector) {
    return this
      .waitForElementVisible(selector);
  }
};
