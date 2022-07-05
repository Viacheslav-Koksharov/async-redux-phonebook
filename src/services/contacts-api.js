import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

export const getContacts = () => {
  return axios.get("/contacts");
};

export const postContact = (contact) => {
  return axios.post("/contacts", contact);
};

export const delContact = (id) => {
  return axios.delete(`/contacts/${id}`);
};
