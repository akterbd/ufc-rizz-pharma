import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
      'Content-Type': 'application/json',
    },
});

export const getProductsApi = async () => {
    const response = await api.get('/products');
    return response.data.products;
};
  
export const getProductByCategoryApi = async (category) => {
    const response = await api.get(`/products/category/${category}`);
    return response.data.products;
};

export const getAllCategoriesApi = async () => {
    const response = await api.get('/products/categories');
    return response.data;
};