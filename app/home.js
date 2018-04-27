import async from 'async';
import GitHub from 'github-api';
import services from './config/services';

/**
 * Home page class
 */
class Home {
  constructor() {
    // use basic auth
    this.gh = new GitHub({
      username: services.github.user,
      token: services.github.token
    });
  }

  init() {
    let me = this.gh.getUser();
    // get organization
    let org = this.gh.getOrganization(services.github.org_name);

    // get org repos
    org.getRepos((err, data) => {
      console.log(data);
    });
  }
}

// instantiate class
const home = new Home();
// run init
home.init();
