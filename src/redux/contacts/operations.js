import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from '../auth/auth-operations';
import { toast } from "react-toastify";
import { axiosInstance } from "../../utils/axios.config"

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token.token;
      if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const { data } = await axiosInstance.get("/contacts");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post("/contacts", body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (_id, thunkAPI) => {
    try {
        const response = await axiosInstance.delete(`/contacts/${_id}`);
      return response.data;
      } catch (e) {
        toast.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);