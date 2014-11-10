// Photo Model - photo.js
var AmpModel = require('ampersand-model');
var User = require('./user');
var _500pxMixin = require('./500px-mixin');

module.exports = AmpModel.extend({
    urlRoot: '/example.com',
    props: {
        aperture: ['string'],
        camera: ['string'],
        category: ['number'],
        collections_count: ['number'],
        comments_count: ['number'],
        converted: ['number'],
        converted_bits: ['number'],
        created_at: ['string'],
        crop_version: ['number'],
        description: ['string'],
        favorites_count: ['number'],
        focal_length: ['string'],
        for_sale: ['boolean'],
        for_sale_date: ['object'],
        height: ['number'],
        hi_res_uploaded: ['number'],
        highest_rating: ['number'],
        highest_rating_date: ['string'],
        id: ['number'],
        image_format: ['string'],
        image_url: ['string'],
        images: ['array'],
        iso: ['string'],
        latitude: ['number'],
        lens: ['string'],
        license_type: ['number'],
        location: ['string'],
        longitude: ['number'],
        name: ['string'],
        nsfw: ['boolean'],
        positive_votes_count: ['number'],
        privacy: ['boolean'],
        rating: ['number'],
        sales_count: ['number'],
        shutter_speed: ['string'],
        status: ['number'],
        taken_at: ['string'],
        times_viewed: ['number'],
        url: ['string'],
        user: ['object'],
        user_id: ['number'],
        votes_count: ['number'],
        width: ['number']
    },
    children: {
        user: User
    }
});
