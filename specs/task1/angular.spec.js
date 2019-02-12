'use strict';

const pageObject            = require('../../pages/pages').container.PageObject;
const angularPage           = pageObject.getAngularPage();

const commonHelper          = require('../../helpers/common.helper.js');
const angularData           = require('../../data/angular/index');

describe('ANGULAR SPEC', () => {

    const angularUrl        = angularData.urls.angularUrl;
    const componentText     = angularData.searchData.componentText;

    afterAll(() => {
        commonHelper.clearAllData();
    });

    describe('@task1 - Angular spec', () => {

        beforeAll(() => {
            commonHelper.openUrl(angularUrl);
        });

        afterAll(() => {
            commonHelper.clearAllData();
        });

        it('should open angular page', () => {
            commonHelper.waitUntilElementVisible(angularPage.fieldSearch, '[Search field] is not visible');
        });

        it('should fill search field and check results', () => {
            angularPage.fillSearchField(componentText);
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

});
