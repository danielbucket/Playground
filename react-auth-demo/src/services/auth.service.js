const API_URL = 'http://localhost:3000/react-auth-demo';

class AuthService {
  static async login(username, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    };

    const data = await response.json();
    return data.token;
  };

  static async logout() {
    // Implement logout logic if needed
  };

  static async new_user(username, password) {
    const response = await fetch(`${API_URL}/auth/new-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    };

    const data = await response.json();
    return data;
  };
};


export default AuthService;