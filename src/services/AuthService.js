import { Log, UserManager } from 'oidc-client';

export default class AuthService {
  constructor() {
    this.state = {
        userManager: new UserManager({
            production: true,
            base_url: 'https://devapi-unieconomy.azurewebsites.net/api',
            authority: 'https://dev-ueidentity.azurewebsites.net/',
            client_id: 'dd38cc85-1deb-cb3b-2be3-c825737fc65f',
            redirect_uri: 'http://localhost:8000/signin-callback.html',
            post_logout_redirect_uri: 'http://localhost:8000',
            silent_redirect_uri:  'http://localhost:8000/silent-renew.html',
            automaticSilentRenew: true,
            response_type: 'id_token token',
            scope: 'openid profile AppFramework',
            filterProtocolClaims: true,
            loadUserInfo: true
        })
    };

    Log.logger = console;
    Log.level = Log.INFO;
  }

  getUser = () => {
    return this.state.userManager.getUser();
  }

  login = () => {
    return this.state.userManager.signinRedirect();
  }

  renewToken = () => {
    return this.state.userManager.signinSilent();
  }

  logout = () => {
    return this.state.userManager.signoutRedirect();
  }
}
