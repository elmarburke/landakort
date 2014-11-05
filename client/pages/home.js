var PageView = require('./base');
var template = require('../templates/pages/home.jade');

module.exports = PageView.extend({
    pageTitle: 'home',
    template: template
});
