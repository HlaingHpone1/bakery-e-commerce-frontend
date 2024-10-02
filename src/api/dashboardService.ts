import api from "../config/axios";
import { baseURL } from "../config/axios";

const dashboard = "api/dashboard";

export const getDashboardData = async () => {
  return await api.get(`${baseURL}/${dashboard}`);
};
