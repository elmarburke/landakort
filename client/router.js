/*global me, app*/
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var Photo = window.Photo = require('./models/photo');
var photo = new Photo({id: 123});
console.log(photo.url, photo.save);

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
    
    app.photos.getOrFetch(photoId, function(err, photo) {
      console.log(err, photo);
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
