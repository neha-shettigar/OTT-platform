interface LoginResponse {
  access_token: string;
}

class AuthService {
  async login(email: string, password: string): Promise<string> {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data: LoginResponse = await response.json();
    return data.access_token;
  }
}

const authService = new AuthService();

export default authService;
