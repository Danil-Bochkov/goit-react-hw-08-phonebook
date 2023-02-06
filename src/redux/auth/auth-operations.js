import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from 'react-toastify';
import { axiosInstance } from "../../utils/axios.config"

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
}

export const register = createAsyncThunk(
    "auth/register",
  async (user, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post("/auth/register", user);
      token.set(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('This user already exist');
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post("/api/auth/login", user);
      token.set(data.token);
      localStorage.setItem("token", data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Invalid password or email!');
    }
  }
);

export const verifyUser = createAsyncThunk(
  'auth/verifyUser',
  async (email, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/api/auth/verify', email);
      toast.success(data.message);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axiosInstance.get('/auth/logout')
      token.unset();
      localStorage.removeItem('token');
      toast.success('Logout successful');
    } catch (e) {
      toast.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
      try {
        const { data } = await axiosInstance.get('/auth/current');
        return data;
      } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
      }
})