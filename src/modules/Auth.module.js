class Auth {
  /**
   * Deauthenticate a user.
   * @description - Removes a token from localStorage.
   */
  static signOut() {
    localStorage.removeItem('token');
  }

  /**
   * Authenticate a user
   * @description - Save user data and token string in local storage
   */
  static authenticateUser(token) {
    console.log({token});
    localStorage.setItem('token', token);
  }

  /**
   * Check if a user is authenticated
   * @returns {boolean}
   * @description - check if a token is saved in Local Storage
   */
  static isUserAuthenticated() {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return true;
  }

  /**
   * Retrieve token from local storage
   * @returns {boolean}
   */
  static getToken() {
    let token = localStorage.getItem('token');
    if (token) {
      return token;
    } else {
      return false;
    }
  }
}

export default Auth;
