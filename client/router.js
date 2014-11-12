/*global me, app*/
var Router = require('ampersand-router');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'i:photoId': 'photo',
    'token::token,callback::callback': '500pxCallback',
    '(*path)': 'catchAll'
  },

  // ------- ROUTE HANDLERS ---------
  home: function () {
    var self = this;

    require.ensure([], function() {
      var HomePage = require('./pages/home');

      self.trigger('page', new HomePage({
        model: me
      }));
    });
  },

  photo: function photo(photoId) {
    var self = this;
    photoId = parseInt(photoId, 10);

    require.ensure([], function() {
      var PhotoPage = require('./pages/photo');

      self.trigger('page', new PhotoPage({
        id: photoId,
      }));
    });
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
