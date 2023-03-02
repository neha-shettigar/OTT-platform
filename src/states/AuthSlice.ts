/* eslint-disable no-useless-catch */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export interface AuthState {
  user: firebase.User | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  error: null,
  isLoading: false,
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      return response.user;
    } catch (error) {
      throw error;
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = null;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.error.message ?? null;
        state.isLoading = false;
      });
  },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
