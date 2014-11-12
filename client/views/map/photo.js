var View = require('ampersand-view');
var L = require('leaflet');
var _ = require('underscore');

module.exports = View.extend({
  template: '<a href="<%= imageUrl %>"><img src="<%= model.image_url %>"></a>',
  render: function() {
    this.renderWithTemplate(this);
    
    this.icon = L.divIcon({
      iconSize: 140,
      className: '',
      html: _.template(this.template)(this)
    });

    this.marker = L.marker([this.model.latitude, this.model.longitude], { icon: this.icon })
      .addTo(this.map);

    return this;
  },
  remove: function() {
    this.map.removeLayer(this.marker);
  },
  initialize: function(options) {
    this.map = options.map;
  },
  derived: {
    imageUrl: {
      deps: ['model.id'],
      fn: function() {
        return '#/i' + this.model.id;
      }
    }
  }
});