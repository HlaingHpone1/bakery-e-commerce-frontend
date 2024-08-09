import api from "../../config/axios";
import { baseURL } from "../../config/axios";
import { LoginProps } from "../../pages/auth/Login";
import { RegisterProps } from "../../pages/auth/Register";

const auth = "api/auth";
const user = "api/user-register";

export const login = async (body: LoginProps) => {
  return await api.post(`${baseURL}/${auth}/login`, body);
};

export const register = async (body: RegisterProps) => {
  return await api.post(`${baseURL}/${user}`, body);
};
