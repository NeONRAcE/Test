'use strict';

class AngularPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------
    constructor() {

        this.fieldSearch        = $('[type="search"]');

        this.searchResults      = $$('.search-area').first();

        this.btnGetStarted      = $('.button');

        this.getStartedContent  = $('#guide-quickstart');

        this.sideNavMenu        = $('.sidenav');

        this.btnHideNavMenu     = $('.hamburger');

    };
    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    fillSearchField(text){
        this.fieldSearch.sendKeys(text);
    };

    clearSearchField(){
        this.fieldSearch.clear();
    };

    clickBtnGetStarted(){
        this.btnGetStarted.click();
    };

    clickHideNavMenu(){
        this.btnHideNavMenu.click();
    };

}

module.exports = AngularPage;
