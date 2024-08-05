// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: {
    username: '',
    role: '',
  },
  status: 'idle', 
//   error: '' || null,
};

// Create an async thunk for fetching user data
export const fetchUserData:any = createAsyncThunk(
  'user/fetchUserData',
  async () => {
    const response = await fetch('https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    updateUserRole(state, action) {
      state.user.role = action.payload;
    },
    setLoading(state, action) {
      state.status = action.payload;
    },
    // setError(state, action) {
    //   state.error = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.status = 'failed';
        // state.error = action.error.message || null;
      });
  },
});

export const { setUser, updateUserRole, setLoading } = userSlice.actions;

export default userSlice.reducer;
