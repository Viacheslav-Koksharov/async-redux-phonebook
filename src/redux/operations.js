import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../services/contacts-api.js";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    // const response = await api.getContacts();
    // return response.data;
    const { data } = await api.getContacts();
    return data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async ({ name, phone }) => {
    const { data } = await api.postContact({ name, phone });
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await api.delContact(id);
    return id;
  }
);
