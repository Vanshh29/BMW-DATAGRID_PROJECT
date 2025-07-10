import axios from 'axios';

const API_URL = 'http://localhost:5050/api/data';

export const fetchData = (params) => axios.get(API_URL, { params });
export const fetchById = (id) => axios.get(`${API_URL}/${id}`);
export const deleteData = (id) => axios.delete(`${API_URL}/${id}`);
