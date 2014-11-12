// Photo Model - photo.js
var AmpModel = require('ampersand-model');
var User = require('./user');
var _500pxMixin = require('./500px-mixin');
var _ = require('underscore');

function replaceImageTypeWith(imageUrl, imageType) {
    return imageUrl.replace(/(\/)\d(\.jpg)(\?v=\d+)?$/, '$1' + imageType + '$2$3');
}

module.exports = AmpModel.extend({
    urlRoot: 'https://api.500px.com/v1/photos/',
    ajaxConfig: {
        beforeSend: function(xhr) {
            var url = xhr.url + '?consumer_key=' + _500pxMixin.consumerKey;
            xhr.open(xhr.method, url);
        },
        xhrFields: {}
    },
    parse: function (attrs) {
        if(_.isObject(attrs.photo)) {
            attrs = attrs.photo;
        }
        attrs.page_url = 'https://500px.com' + attrs.url;
        delete attrs.url;

        return attrs;
    },
    props: {
        aperture: ['string'],
        camera: ['string'],
        category: ['number'],
        collections_count: ['number'],
        comments_count: ['number'],
        converted: ['any'],
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
        page_url: ['string'],
        user_id: ['number'],
        votes_count: ['number'],
        width: ['number']
    },
    children: {
        user: User
    },
    derived: {
        thumbnail_image_url: {
            deps: ['image_url'],
            fn: function() {
                return replaceImageTypeWith(this.image_url, 1);
            }
        },
        big_image_url: {
            deps: ['image_url'],
            fn: function() {
                return replaceImageTypeWith(this.image_url, 4);
            }
        }
    }
});
