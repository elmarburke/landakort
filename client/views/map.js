/*global me, app*/
var View = require('ampersand-view');
var template = require('../templates/map.jade');
var L = require('leaflet');
var _ = require('underscore');
require('leaflet/dist/leaflet.css');

var Photos = require('../models/photo-collection');
var MapPhotosView = require('./map/photo');

module.exports = View.extend({
  template: template,
  render: function() {
    this.renderWithTemplate(this);

    if(!this.map) {

      this.map = new L.map(this.el, {
        center: [51.7835, 6.1505],
        zoom: 13
      });

      var tp;
      if(L.Browser.retina) { tp = 'lr'; }
      else { tp = 'ls'; }

      var apikey = '9e6e36fe09ac46c4a6abf0adb4324bbf';

      L.tileLayer('https://tiles.lyrk.org/' + tp + '/{z}/{x}/{y}?apikey=' + apikey, {
        attribution: '<a href="http://geodienste.lyrk.de/copyright" target="_blank">Lizenzinformationen</a>, Tiles by <a href="http://geodienste.lyrk.de/" target="_blank">Lyrk</a>',
        maxZoom: 18
      }).addTo(this.map);
    }

    var element = document.createElement('div');
    var filterGeo = function(photo) {
      return _.isNumber(photo.longitude) && _.isNumber(photo.latitude);
    };
    var collectionView = this
      .renderCollection(this.collection, MapPhotosView, element, {
        viewOptions: {map: this.map},
        filter: filterGeo
      });

    return this;
  },
  initialize: function() {
    var photos = new Photos();
    this.collection = photos;
    app.photos = photos;
    this.collection.fetch({data: {geo: '51.7835,6.1505,5km', rrp: 100}});
    return this;
  }
});