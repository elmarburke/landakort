/*global app, alert*/

var PageView = require('./base');
var template = require('../templates/pages/photo.jade');

module.exports = PageView.extend({
    pageTitle: 'home',
    template: template,
    bindings: {
      'model.id': {
        type: 'text',
        hook: 'id'
      },
      'model.image_url': {
        type: 'attribute',
        hook: 'photo',
        name: 'src'
      }
    },
    initialize: function(spec) {
      var self = this;
      app.photos.getOrFetch(spec.id, function(err, model) {
        if (err) alert('couldnt find a model with id: ' + spec.id);
        self.model = model;
      });
    }
});
