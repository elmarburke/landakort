/*global me, app*/
var Router = require('ampersand-router');
var HomePage = require('./pages/home');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'token\::token,callback\::callback': '500pxCallback',
    '(*path)': 'catchAll'
  },

  // ------- ROUTE HANDLERS ---------
  home: function () {
    this.trigger('page', new HomePage({
      model: me
    }));
  },

  '500pxCallback': function (token, callback) {
    window.setTimeout(function() {
      window.opener.app[callback]({
        token: token,
        callback: callback
      });
    }, 100);
    // window.close();
  },

  catchAll: function () {
    this.redirectTo('');
  }
});
