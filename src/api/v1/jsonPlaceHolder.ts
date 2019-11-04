import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getTodos = () => {
  return axiosInstance.get('/todos', {
      params: {
          limit: 1000
      }
  });
};