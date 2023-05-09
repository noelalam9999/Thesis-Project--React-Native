import axios from 'axios';
import Backend from '../config';

const AuthService = {};
AuthService.login = async (user) => {
  try {
    const auth_user = await axios.post(Backend.Users + '/login', user);
    return auth_user.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
AuthService.register = async (user) => {
  try {
    const auth_user = await axios.post(Backend.Users + '/register', user);
    return auth_user.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default AuthService;
