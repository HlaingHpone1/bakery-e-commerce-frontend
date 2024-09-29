import api from "../config/axios";
import { baseURL } from "../config/axios";

const order = "api/orders";

export const createOrder = async (body: Order) => {
  return await api.post(`${baseURL}/${order}`, body);
};

export const getAllOrderList = async (
  page: number,
  limit: number,
  paramString: string = ""
) => {
  return await api.get(
    `${baseURL}/${order}?${paramString}&page=${page}&limit=${limit}`
  );
};

export const getOrderById = async (id: number) => {
  return await api.get(`${baseURL}/${order}/${id}`);
};
