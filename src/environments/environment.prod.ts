export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'tp-redbadge-reclient.herokuapp.com/':
        // this is the full url of your deployed API
        APIURL = 'https://redbadgeremwebapi.azurewebsites.net'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'https://redbadgeremwebapi.azurewebsites.net';
}