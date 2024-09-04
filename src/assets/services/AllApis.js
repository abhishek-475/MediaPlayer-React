import axios from "axios";

const base_url = "https://mpserver-x9uy.onrender.com";
export const AddVideos = async (data) => {
  return await axios.post(`${base_url}/Videos`, data);
};

export const getVideos = async (data) => {
  return await axios.get(`${base_url}/Videos`);
};
export const deleteVideo = async (id) => {
  return await axios.delete(`${base_url}/Videos/${id}`);
};

export const AddCategory = async (data) => {
  return await axios.post(`${base_url}/Category`, data);
};

export const getCategory = async () => {
  return await axios.get(`${base_url}/Category`);
};

export const deleteCategory = async (id) => {
  return await axios.delete(`${base_url}/Category/${id}`);
};

export const addHistory = async (data) => {
  return await axios.post(`${base_url}/History`, data);
};

export const getHistory = async () => {
  return await axios.get(`${base_url}/History`);
};

export const deleteHistory = async (id) => {
  return await axios.delete(`${base_url}/History/${id}`);
};

export const updateCategory = async (id, data) => {
  return await axios.put(`${base_url}/Category/${id}`, data);
};

export const checkEmail = async (email) => {
  return await axios.get(`${base_url}/Users?email=${email}`);
};

export const registerEmail = async (data) => {
  return await axios.post(`${base_url}/Users`, data);
};

export const getLogin = async (email, password) => {
  return await axios.get(
    `${base_url}/Users?email=${email}&password=${password}`
  );
};
