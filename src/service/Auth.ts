import router from "../config/routes"; // Assuming router is properly configured in router.ts
import axios from "axios";

export   interface Credentials {
    email: string;
    password: string;
}

interface User {
  authenticated: boolean;
}

class AuthService {
  public user: User = {
    authenticated: false,
  };

  public async login(credentials: Credentials): Promise<any> {
    try {
    const response = await axios.post('http://127.0.0.1:3000/api/auth',credentials)
      console.log('Login successful:', response.data)
      localStorage.setItem('token', response.data.data.token);
      this.user.authenticated = true;

        router.push('/') // Replace with your actual route
      } catch (error) {
        console.log(error)
        return error
      } 
  }

  public logout(): void {
    console.log('logout');
    this.user.authenticated = false;
    localStorage.removeItem("token");
    router.push("/login");
  }

  public checkAuth(): void {
    const token = localStorage.getItem("token");
    this.user.authenticated = !!token;
  }
}

const auth = new AuthService();

export default auth;
