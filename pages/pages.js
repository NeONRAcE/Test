'use strict';

const bottlejs  = require('bottlejs').pop('test');

bottlejs.factory('PageObject', function () {
    return {
        getAngularPage: function () {
            const angularPage = require('./angular/angular.po.js');
            return new angularPage();
        },
    }
});

module.exports = bottlejs;