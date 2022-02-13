# React single-page application built with MSAL React and Microsoft identity platform

This sample demonstrates how to use [MSAL React](https://www.npmjs.com/package/@azure/msal-react) to login, logout, conditionally render components to authenticated users, and acquire an access token for a protected resource such as Microsoft Graph.

## Features

This sample demonstrates the following MSAL React concepts:

* Configuration
* Login
* Logout
* Conditionally rendering components for authenticated or unauthenticated users
* Acquiring an access token and calling Microsoft Graph

## Contents

| File/folder       | Description                                |
|-------------------|--------------------------------------------|
| `src`             | Contains sample source files               |
| `styles`          | Contains styling for the sample            |
| `components`      | Contains ui components such as sign-in button, sign-out button and navbar |
| `public`          | Contains static content such as images and the base html   |
| `authConfig.js`   | Contains configuration parameters for the sample.      |
| `App.jsx`         | Contains MSAL React Components and main sample content |
| `graph.js`       | Provides a helper function for calling MS Graph API.   |                      |
| `index.js`        | Contains the root component and MsalProvider |
| `.gitignore`      | Define what to ignore at commit time.      |
| `CHANGELOG.md`    | List of changes to the sample.             |
| `CONTRIBUTING.md` | Guidelines for contributing to the sample. |
| `package.json`    | Package manifest for npm.                  |
| `README.md`       | This README file.                          |
| `LICENSE`         | The license for the sample.                |

**Note:** This sample was bootstrapped using [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### Prerequisites

[Node.js](https://nodejs.org/en/) must be installed to run this sample.

### Setup

1. [Register a new application](https://docs.microsoft.com/azure/active-directory/develop/scenario-spa-app-registration) in the [Azure Portal](https://portal.azure.com). Ensure that the application is enabled for the [authorization code flow with PKCE](https://docs.microsoft.com/azure/active-directory/develop/v2-oauth2-auth-code-flow). This will require that you redirect URI configured in the portal is of type `SPA`.
1. Clone this repository `git clone https://github.com/Azure-Samples/ms-identity-javascript-react-spa.git`
1. Open the [/src/authConfig.js](./src/authConfig.js) file and provide the required configuration values.
1. On the command line, navigate to the root of the repository, and run `npm install` to install the project dependencies via npm.

## Add local .env file

```
# https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react
# The Application (client) ID of the application you registered (app/client ID on AAD Portal)
REACT_APP_APP_ID="[App Id from above]"

# The Azure cloud instance in which your application is registered.
# For the main (or global) Azure cloud: https://login.microsoftonline.com
REACT_APP_CLOUD_INSTANCE_ID="https://login.microsoftonline.com"

# If your application supports accounts in any organizational directory and personal Microsoft accounts: common
# Otherwise use the AAD Tenant Id
# REACT_APP_TENANT_ID="common"
REACT_APP_TENANT_ID="[AAD Tenant Id]"

REACT_APP_REDIRECT_URI="http://localhost:3000"

# The instance of the Microsoft Graph API the application should communicate with.
# For the global Microsoft Graph API endpoint: https://graph.microsoft.com. 
REACT_APP_GRAPH_ME_ENDPOINT="https://graph.microsoft.com/v1.0/me"
```

## Running the sample

1. Configure authentication and authorization parameters:
   1. Open the local `.env` file.
   2. Set `REACT_APP_APP_ID` value with your app/client ID on AAD Portal.
   3. Set `REACT_APP_CLOUD_INSTANCE_ID` value with `"https://login.microsoftonline.com"` (*note*: This is for multi-tenant applications located on the global Azure cloud. For more information, see the [documentation](https://docs.microsoft.com/azure/active-directory/develop/quickstart-v2-javascript-auth-code)).
   4. Set `REACT_APP_TENANT_ID` value with `"common"` (*note*: This is for multi-tenant applications located on the global Azure cloud. For more information, see the [documentation](https://docs.microsoft.com/azure/active-directory/develop/quickstart-v2-javascript-auth-code)).
   5. Set `"REACT_APP_REDIRECT_URI"` value with `"http://localhost:3000"` the redirect uri you setup on AAD Portal.
2. Configure the parameters for calling MS Graph API:
   2. Set `REACT_APP_GRAPH_ME_ENDPOINT` value with `"https://graph.microsoft.com/v1.0/me"` (*note*: This is for MS Graph instance located on the global Azure cloud. For more information, see the [documentation](https://docs.microsoft.com/en-us/graph/deployments))
3. To start the sample application, run `npm start`.
4. Finally, open a browser and navigate to [http://localhost:3000](http://localhost:3000).
