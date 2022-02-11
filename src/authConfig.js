// Tutorial: Sign in users and call the Microsoft Graph API from a React single-page app (SPA) using auth code flow
//   https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react
import { LogLevel } from '@azure/msal-browser';

// https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react
// The Application (client) ID of the application you registered.
const appId = process.env.REACT_APP_APP_ID; // Application (client) ID

// The Azure cloud instance in which your application is registered.
// For the main (or global) Azure cloud: https://login.microsoftonline.com
const cloudInstanceId = process.env.REACT_APP_CLOUD_INSTANCE_ID; // Cloud_Instance_Id

// If your application supports accounts in any organizational directory and personal Microsoft accounts: common
const tenantInfo = process.env.REACT_APP_TENANT_INFO; // Tenant_Info

const redirectUri = process.env.REACT_APP_REDIRECT_URI; // Redirect_Uri

// The instance of the Microsoft Graph API the application should communicate with.
// For the global Microsoft Graph API endpoint: https://graph.microsoft.com. 
const graphMeEndpoint = process.env.REACT_APP_GRAPH_ME_ENDPOINT; // Graph_Endpoint_1.0

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig = {
  auth: {
    clientId: appId,
    authority: `${cloudInstanceId}/${tenantInfo}`,
    redirectUri: redirectUri,
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: ['User.Read'],
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
  graphMeEndpoint: graphMeEndpoint,
};
