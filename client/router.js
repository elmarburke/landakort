/*global me, app*/
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var PhotoPage = require('./pages/photo');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'i:photoId': 'photo',
    'token::token,callback::callback': '500pxCallback',
    '(*path)': 'catchAll'
  },

  // ------- ROUTE HANDLERS ---------
  home: function () {
    this.trigger('page', new HomePage({
      model: me
    }));
  },

  photo: function photo(photoId) {
    photoId = parseInt(photoId, 10);
    
    this.trigger('page', new PhotoPage({
      id: photoId,
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
