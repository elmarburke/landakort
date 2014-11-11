// Photo Collection - photo-collection.js
var AmpCollection = require('ampersand-rest-collection');
var Photo = require('./photo');
var _500pxMixin = require('./500px-mixin');

module.exports = AmpCollection.extend({
  model: Photo,
  url: 'https://api.500px.com/v1/photos/search',
  ajaxConfig: {
    beforeSend: function(xhr) {
        var url = xhr.url + '&consumer_key=' + _500pxMixin.consumerKey;
        xhr.open(xhr.method, url);
    },
    xhrFields: {}
  },
  parse: function (attrs) {
    return attrs.photos;
  }
});
