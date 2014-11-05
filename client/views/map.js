var View = require('ampersand-view');
var template = require('../templates/map.jade');
var L = require('leaflet');
var Lstyle = require('leaflet/dist/leaflet.css');

module.exports = View.extend({
  template: template,
  render: function() {
    this.renderWithTemplate(this);
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

    return this;
  }
});