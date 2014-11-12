var View = require('ampersand-view');
require('../styles/photo.scss');

module.exports = View.extend({
    template: '<li><a><img data-hook="previewImage"></a></li>',
    bindings: {
      'model.thumbnail_image_url': {
        type: 'attribute',
        hook: 'previewImage',
        name: 'src'
      },
      'imageUrl': {
        type: 'attribute',
        selector: 'a',
        name: 'href'
      }
    },
    derived: {
      imageUrl: {
        deps: ['model.id'],
        fn: function() {
          return '#/i' + this.model.id;
        }
      }
    },
    initialize: function () {
    }
});