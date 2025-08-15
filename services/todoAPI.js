import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

export const getTodos = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addTodo = async (text) => {
  const res = await axios.post(API_URL, { text });
  return res.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
