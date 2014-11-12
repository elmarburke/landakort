/*global me, app*/
var View = require('ampersand-view');
var template = require('../templates/map.jade');
var L = require('leaflet');
var _ = require('underscore');
require('leaflet/dist/leaflet.css');

var MapPhotosView = require('./map/photo');

module.exports = View.extend({
  template: template,
  render: function() {
    var self = this;
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

      this.map.on('moveend', function() {
        self.loadImages.call(self);
      });

      this.loadImages();
    }

    var element = document.createElement('div');

    var filterGeo = function(photo) {
      return _.isNumber(photo.longitude) && _.isNumber(photo.latitude);
    };

    var collectionView = this.renderCollection(self.collection, 
                            MapPhotosView, element, {
                              viewOptions: {map: this.map},
                              filter: filterGeo
                            });

    app.router.on('route:photo', function(id) {
      var photo = app.photos.get(id);
      self.map.setView([photo.latitude, photo.longitude], 18);
    });
    
    return this;
  },
  initialize: function() {
    this.collection = app.photos;
    return this;
  },
  loadImages: function() {
    var bounds = this.map.getBounds();
    var southWest = bounds.getSouthWest();
    var northEast = bounds.getNorthEast();

    var radius = southWest.distanceTo(northEast) / 2 / 1000;
    var center = this.map.getCenter();

    var geo = [center.lat, center.lng, radius + 'km'].join(',');

    this.collection.fetch({data: {geo: geo, rpp: 40}});
  }
});