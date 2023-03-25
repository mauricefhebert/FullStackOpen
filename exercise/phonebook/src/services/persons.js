import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = async () => {
  const request = axios.get(baseUrl);
  const res = await request;
  return res.data;
};

const getById = async id => {
  const request = axios.get(`${baseUrl}/${id}`);
  const res = await request;
  return res.data;
};

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(res => res.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(res => res.data);
};

const deleteById = id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(res => res.data);
};

export default { getAll, getById, create, update, deleteById };
