import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getAllBooks = async () => {
  const response = await client.get('/books');
  return response.data;
};

export const addBook = async (book) => {
  const response = await client.post('/books', book);
  return response.data;
};

export const updateBook = async (id, book) => {
  const response = await client.put(`/books/${id}`, book);
  return response.data;
};

export const deleteBook = async (id) => {
  const response = await client.delete(`/books/${id}`);
  return response.data;
};

