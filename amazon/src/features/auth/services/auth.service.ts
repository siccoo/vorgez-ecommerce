import axios from "axios";

import { DisplayUser } from "../models/DisplayUser.interface";
import { Jwt } from "../models/Jwt";
import { LoginUser } from "../models/LoginUser.interface";
import { NewUser } from "../models/NewUser";

const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_API}/auth/register`, newUser);

  return response.data;
};

const login = async (user: LoginUser): Promise<Jwt> => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_API}/auth/login`, user);
  
    if (response.data) {
        localStorage.setItem('jwt', JSON.stringify(response.data));
    }
    return response.data;
  };

export const authService = {
  register,
  // login,
  // logout,
  // verifyJwt
};
