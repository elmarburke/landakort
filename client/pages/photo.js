/*global app, alert*/

var PageView = require('./base');
var template = require('../templates/pages/photo.jade');

module.exports = PageView.extend({
    pageTitle: 'home',
    template: template,
    bindings: {
      'model.user.profile_url': [{
          type: 'attribute',
          hook: 'profile-name',
          name: 'href'
        }, {
          type: 'attribute',
          hook: 'profile-image-link',
          name: 'href'
        }],
      'model.user.fullname': {
        hook: 'profile-name'
      },
      'model.user.userpic_url': {
        type: 'attribute',
        hook: 'profile-image',
        name: 'src'
      },
      'model.name': [{
          hook: 'image-title'
        }, {
          type: 'attribute',
          hook: 'image-title',
          name: 'title'
        }],
      'model.page_url': [{
          type: 'attribute',
          hook: 'photo-page',
          name: 'href'
        }, {
          type: 'attribute',
          hook: 'image-title',
          name: 'href'
        }],
      'model.big_image_url': {
        type: 'attribute',
        hook: 'photo',
        name: 'src'
      },
      'model.rating': { hook: 'rating' },
      'model.highest_rating': { hook: 'highest-rating' }
    },
    initialize: function(spec) {
      var self = this;
      app.photos.getOrFetch(spec.id, function(err, model) {
        if (err) alert('couldnt find a model with id: ' + spec.id);
        self.model = model;
      });
    }
});
