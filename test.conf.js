const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

const specReporter = new SpecReporter({
    displayStacktrace: 'all',
    displayFailuresSummary: true,
    displayPendingSummary: false,
    displaySuccessfulSpec: true,
    displayFailedSpec: true,
    displayPendingSpec: false,
    displaySpecDuration: true,
    displaySuiteNumber: true,
    colors: {
        success: 'green',
        failure: 'blue',
        pending: 'yellow'
    },
    prefixes: {
        success: '✓ ',
        failure: '✗ ',
        pending: '* '
    },
    customProcessors: []
});

exports.config = {

    directConnect: true,

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            'args': ['--disable-extensions', '--incognito', '--window-size=1600,1200', '--disable-infobars', '--no-sandbox', '--test-type=browser', '--start-maximized', '--disable-dev-shm-usage']
        }
    },

    frameworks: [
        'jasmine',
        'jasmine-matchers',
        'jasmine2'
    ],

    plugins: [
        {
            package: 'protractor-testability-plugin',
            path: 'node_modules/protractor-testability-plugin'
        }
    ],

    suites: {
        tasks: [
            './specs/tasks/*.spec.js',
        ],
    },

    allScriptsTimeout: 60000,

    onPrepare: function() {
        jasmine.getEnv().addReporter(specReporter);
    }

};
