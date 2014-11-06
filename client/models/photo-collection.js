// Photo Collection - photo-collection.js
var AmpCollection = require('ampersand-rest-collection');
var Photo = require('./photo');
var _500pxMixin = require('./500px-mixin');

module.exports = AmpCollection.extend({
  model: Photo,
  url: 'https://api.500px.com/v1/photos/search?consumer_key='+_500pxMixin.consumerKey,
  parse: function (attrs) {
    attrs = attrs.photos;
    return attrs;
  }
});