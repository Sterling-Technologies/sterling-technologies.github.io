import jwt from 'jsonwebtoken';
import GitHub from 'github-api';
import services from './../config/services';

class Github {
  static generateToken() {
    // get private key
    const privateKey = services.github.private_key;
    // get iss
    const iss = services.github.iss;
    // create jwt encode payload
    const payload = {
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (60 * 10), // expires in 10 minutes
      iss
    };
    // set options
    const options = {
      algorithm: 'RS256'
    };

    // generate token
    return jwt.sign(payload, privateKey);
  }

  static getClient() {
    const token = this.generateToken();

    let gh = new GitHub({
      token
    });

    let me = gh.getOrganization();
    console.log(me);

    me.listMembers((err, data) => {
      console.log(data);
    });
  }
}

export default Github;
