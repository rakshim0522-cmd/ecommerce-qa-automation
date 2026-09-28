const environments = {
    qa: {
        baseURL: 'https://www.saucedemo.com/'
    },

    staging: {
        baseURL: 'https://www.saucedemo.com/'
    }
};

const currentEnvironment =
    process.env.TEST_ENV || 'qa';

const selectedEnvironment =
    environments[currentEnvironment];

if (!selectedEnvironment) {
    throw new Error(
        `Invalid TEST_ENV: ${currentEnvironment}. ` +
        `Available environments: ${Object.keys(environments).join(', ')}`
    );
}

module.exports = {
    environment: currentEnvironment,
    config: selectedEnvironment
};