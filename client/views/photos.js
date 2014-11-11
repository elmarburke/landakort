/*global app*/
var View = require('ampersand-view');
var PhotoView = require('./photo');

module.exports = View.extend({
    template: '<ul id="photos"></ul>',
    render: function (opts) {
      this.renderWithTemplate(this);

      this.renderCollection(this.collection, PhotoView, this.el, opts);

      return this;
    },
    initialize: function () {
      this.collection = app.photos;
    }
});