module.exports = {
  '@tags': ['google'],
  'Login Page Initial Render': function (browser) {
    browser
      .url('www.google.com')
      .waitForElementVisible('body', 1000)
      .acceptAlert()
      .click('button.yes') // button -> <button class="yes" data-age-gate-confirm="">Yes</button>
      .click('body > div.overlay-layer > section > a')
      .dismissAlert()
      .pause(1000);
  },

  'Browser quit': function (browser) {
    browser
      .pause(1000)
      .end();
  }

};

