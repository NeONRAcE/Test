'use strict';
var config                  = require('../test.conf.js');

var CommonHelper = function() {

    this.clearSessionStorage = function () {
        browser.executeScript('window.sessionStorage.clear();');
    };

    this.clearLocalStorage = function () {
        browser.executeScript('window.localStorage.clear();');
    };

    this.clearCookies = function () {
        browser.manage().deleteAllCookies();
    };

    this.clearAllData = function () {
        this.clearSessionStorage();
        this.clearLocalStorage();
        this.clearCookies();
    };

    this.waitUntilElementVisible = function (element, errText) {
        var EC = browser.ExpectedConditions;
        return browser.driver.wait(EC.visibilityOf(element), config.config.allScriptsTimeout, errText);
    };

    this.waitUntilElementIsNotPresent = function (element) {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(EC.stalenessOf(element));
    };

    this.waitUntilElementInvisible = function (element) {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(EC.invisibilityOf(element));
    };

    this.openUrl = function (url) {
        browser.get(url);
        console.log(url);
    };
    
    this.pressEnter = function () {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };

};

module.exports = new CommonHelper();
