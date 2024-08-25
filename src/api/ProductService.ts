import api from "../config/axios";
import { baseURL } from "../config/axios";

const product = "api/products";

export const getAllProducts = async (
  page: number,
  limit: number,
  paramString: string = ""
) => {
  return await api.get(
    `${baseURL}/${product}?${paramString}&page=${page}&limit=${limit}`
  );
};

export const createProduct = async (body: any) => {
  return await api.post(`${baseURL}/${product}`, body);
};

export const deleteProduct = async (id: number) => {
  return await api.delete(`${baseURL}/${product}/${id}`);
};

export const getProductById = async (id: number) => {
  return await api.get(`${baseURL}/${product}/${id}`);
};

export const updateProduct = async (id: number, body: any) => {
  return await api.post(`${baseURL}/${product}/${id}`, body);
};
