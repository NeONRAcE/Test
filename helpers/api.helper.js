'use strict';
const request       = require('request');
const googleData    = require('../data/angular/index');

const ApiHelper = function () {

    const googleEndpoint    = googleData.urls.googleUrl;

    this.searchResults = function (text) {
        return new Promise(function (resolve, reject) {
            request.get({
                url: googleEndpoint + '?q=' + text,
                headers: {
                    'content-type' : 'application/json',
                },
            }, function (error, response, body) {
                if(!error && response.statusCode == 200) {
                    resolve(body);
                }
                else {
                    console.log(body);
                    reject({error: error});
                }
            });
        });
    };
};

module.exports = new ApiHelper();