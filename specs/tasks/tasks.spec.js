'use strict';

const pageObject            = require('../../pages/pages').container.PageObject;
const angularPage           = pageObject.getAngularPage();

const commonHelper          = require('../../helpers/common.helper.js');
const apiHelper             = require('../../helpers/api.helper');
const angularData           = require('../../data/angular/index');

describe('TEST TASKS SPEC', () => {

    const urls              = angularData.urls;
    const searchData        = angularData.searchData;

    afterAll(() => {
        commonHelper.clearAllData();
    });

    describe('@task1 - Angular spec', () => {

        beforeAll(() => {
            commonHelper.openUrl(urls.angularUrl);
        });

        afterAll(() => {
            commonHelper.clearAllData();
        });

        it('should open angular page', () => {
            commonHelper.waitUntilElementVisible(angularPage.fieldSearch, '[Search field] is not visible');
        });

        it('should fill search field and check results', () => {
            angularPage.fillSearchField(searchData.componentText);
            commonHelper.waitUntilElementVisible(angularPage.searchResults, '[Search results] is not visible');
        });

        it('should clear search field and check no results data', () => {
            angularPage.clearSearchField();
            commonHelper.pressEnter();
            commonHelper.waitUntilElementIsNotPresent(angularPage.searchResults, '[Search results] are still presented');
        });

        it('should enter "Get Started" section', () => {
            angularPage.clickBtnGetStarted();
            commonHelper.waitUntilElementVisible(angularPage.getStartedContent, '["Get Started" content] is not visible');
        });

        it('should hide navigation menu', () => {
            angularPage.clickHideNavMenu();
            commonHelper.waitUntilElementInvisible(angularPage.sideNavMenu, '[Navigation menu] is still visible');
        });

    });

    describe('@task2 - API spec', () => {

        let pageCode;

        beforeAll(() => {
            commonHelper.openUrl(urls.googleUrl);
        });

        afterAll(() => {
            commonHelper.clearAllData();
        });

        it('should get page code of google query', function (done) {
            apiHelper.searchResults(searchData.angularText).then(function (value) {
                pageCode = value;
                done();
            }).catch(function (error){
                console.log('ERROR: ', error);
                done(error);
            });
        });

        it('should find angular page in response', () => {
            expect(pageCode).toContain(urls.angularUrl);
        });

    });

});
