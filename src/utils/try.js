import { createSlice, createAsyncThunk, thinkAPI } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../utils/constans';

export const getCatigories = createAsyncThunk('catigories/getCatigories', async (_, thinkAPI) => {
  try {
    const res = await axis(`${BASE_URL}/catigories`);
    return res.data;
  } catch (err) {
    return thinkApi.rejectWithValue(err);
  }
});

const catigoriesSlice = createSlice = ({
  name: 'catigories',
  initialState: {
    list: [],
    isLoading: false
  },
  extraReducer: (builder) => {
    builder.addCase(getCatigories.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getCatigories.fulfilled, (state, {payload}) => {
      state.list = payload;
      state.isLoading = false;
    });

    builder.addCase(getCatigories.reected, (state) => {
      state.isLoading = false;
    })
  }
})

export default categoriesSlice.reducer;