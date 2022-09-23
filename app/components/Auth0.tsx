import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({ domain: process.env.REACT_APP_AUTH0_DOMAIN, clientId: process.env.REACT_APP_AUTH0_CLIENTID})

export default auth0;
