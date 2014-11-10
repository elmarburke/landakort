/*global app, me, $*/

var PageView = require('./base');
var template = require('../templates/pages/photo.jade');

module.exports = PageView.extend({
    pageTitle: 'home',
    template: template,
    bindings: {
      type: 'text',
      hook: 'model.id'
    }
});
