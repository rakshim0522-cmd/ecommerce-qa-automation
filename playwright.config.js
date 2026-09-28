const { defineConfig, devices } = require('@playwright/test');

const { config } = require('./config/environment');

module.exports = defineConfig({

    testDir: './tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    timeout: 30 * 1000,

    expect: {
        timeout: 10 * 1000
    },

    reporter: [
        [
            'html',
            {
                outputFolder: 'playwright-report',
                open: 'never'
            }
        ],
        ['list']
    ],

    use: {

        baseURL:
            process.env.BASE_URL ||
            config.baseURL,

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'on-first-retry',

        actionTimeout: 15 * 1000,

        navigationTimeout: 30 * 1000
    },

    projects: [

        {
            name: 'chromium',

            use: {
                ...devices['Desktop Chrome']
            }
        },

        {
            name: 'firefox',

            use: {
                ...devices['Desktop Firefox']
            }
        }

    ]

});