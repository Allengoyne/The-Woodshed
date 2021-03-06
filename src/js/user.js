class User {
  constructor() {
    this.loggedIn = false;
    this.email = null;
    this.username = 'Anonymous';
  }

  login() {
    this.loggedIn = true;
    return this;
  }

  logout() {
    this.loggedIn = false;
    return this;
  }

  setData(data) {
    let user = data.attributes;
    this.username = user.username;
    this.email = user.email;
    return this;
  }
}

export default new User();
