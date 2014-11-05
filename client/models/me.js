var AmpersandModel = require('ampersand-model');
var fiveHundredPx = require('../libs/500px');

module.exports = AmpersandModel.extend({
    type: 'user',
    props: {
        id: ['string'],
        firstName: ['string', true, ''],
        lastName: ['string', true, ''],
        username: ['string'],
    },
    session: {
        fiveHundredPx: fiveHundredPx
    },
    derived: {
        fullName: {
            deps: ['firstName', 'lastName'],
            cache: true,
            fn: function () {
                return this.firstName + ' ' + this.lastName;
            }
        },
        initials: {
            deps: ['firstName', 'lastName'],
            cache: true,
            fn: function () {
                return (this.firstName.charAt(0) + this.lastName.charAt(0)).toUpperCase();
            }
        }
    },
    login: function() {
        fiveHundredPx.login(function(status) {
            if (status === 'authorized') {
                fiveHundredPx.api('/users', function (response) {
                    console.log(response);
                });
            }
        });
    }
});
