import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api'; 

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
  },
});

// User API
export const createUser = (userData) => {
  return axiosInstance.post('/users', userData);
};

export const login = (userData) => {
  return axiosInstance.post('/login', userData);
};

// Transaction API
export const createTransaction = (transactionData) => {
  return axiosInstance.post('/transactions', transactionData);
};
export const getTransactions = (id) => {
  return axiosInstance.get(`/transactions/${id}`);
};

// Category API
export const getCategories = () => {
  return axiosInstance.get('/categories');
};
export const createCategory = (categoryData) => {
  return axiosInstance.post('/categories', categoryData);
};

// Export an object with the functions
const api = {
  createUser,
  login,
  createTransaction,
  createCategory,
  getCategories,
  getTransactions
};

export default api;
