/*global app, me, $*/

var PageView = require('./base');
var template = require('../templates/pages/home.jade');
var fiveHundredPx = require('../libs/500px');
module.exports = PageView.extend({
    pageTitle: 'home',
    template: template,
    events: {
      'click [data-hook=login]': 'login',
      'click [data-hook=load]': 'loadImages'
    },
    login: function() {
      me.login(function() {
        console.log('logged in');
      });
    },
    loadImages: function() {
      fiveHundredPx.api('/photos', { feature: 'popular', page: 1 }, function (response) {
          console.log(response.data.photos);
      });
    }

});
