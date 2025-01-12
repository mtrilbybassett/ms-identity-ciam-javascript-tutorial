const { LogLevel } = require('@azure/msal-node');

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/configuration.md
 */
const msalConfig = {
    auth: {
        clientId: 'Enter_the_Application_Id_Here',
        authority: 'https://Enter_the_Tenant_Subdomain_Here.ciamlogin.com/',
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                // console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: LogLevel.Verbose,
        },
    },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
const loginRequest = {
    scopes: [],
    extraQueryParameters: {
        dc: 'ESTS-PUB-EUS-AZ1-FD000-TEST1', // STS CIAM test slice
    },
};

module.exports = {
    msalConfig: msalConfig,
    loginRequest: loginRequest,
};
