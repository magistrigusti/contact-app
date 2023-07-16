import { createSlice, createAsyncThunk, thunkAPI } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../utils/constans';


export const getCatigories = createAsyncThunk('categories/getCatigories', async (_, thinkAPI) => {
  try {
    const res = await axios(`${BASE_URL}/categories`);

    return res.data;
  } catch (err) {
    console.log(err)
    return thunkAPI.rejectWithValue(err);
  }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    isLoading: false
  },
  extraReducer: (builder) => {
    builder.addCase(getCatigories.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getCatigories.fulfilled, (state, { payload })  => {
      state.list = payload;
      state.isLoading = false;
    });

    builder.addCase(getCatigories.rejected, (state) => {
      state.isLoading = false;
    })
  }
});

export default categoriesSlice.reducer;