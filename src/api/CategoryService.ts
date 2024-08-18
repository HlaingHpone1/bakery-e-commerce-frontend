import api from "../config/axios";
import { baseURL } from "../config/axios";
import { Category } from "../pages/admin/category/CategoryList";

const category = "api/categories";

export const getAllCategories = async (
  page: number,
  limit: number,
  paramString: string = ""
) => {
  return await api.get(
    `${baseURL}/${category}?${paramString}&page=${page}&limit=${limit}`
  );
};

export const createCategory = async (body: Category) => {
  return await api.post(`${baseURL}/${category}`, body);
};

export const deleteCategory = async (id: number) => {
  return await api.delete(`${baseURL}/${category}/${id}`);
};

export const getCategoryById = async (id: number) => {
  return await api.get(`${baseURL}/${category}/${id}`);
};

export const updateCategory = async (id: number, body: Category) => {
  return await api.put(`${baseURL}/${category}/${id}`, body);
};
