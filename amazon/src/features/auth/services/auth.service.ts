import axios from "axios";

import { DisplayUser } from "../models/DisplayUser.interface";
import { NewUser } from "../models/NewUser";

const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_API}/auth/register`, newUser);

  return response.data;
};

export const authService = {
  register,
  // login,
  // logout,
  // verifyJwt
};
