// User Model - user.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({
    props: {
        affection: ['number'],
        city: ['string'],
        country: ['string'],
        firstname: ['string'],
        fullname: ['string'],
        id: ['number'],
        lastname: ['string'],
        store_on: ['boolean'],
        upgrade_status: ['number'],
        username: ['string'],
        userpic_https_url: ['string'],
        userpic_url: ['string'],
        usertype: ['number']
    }
});