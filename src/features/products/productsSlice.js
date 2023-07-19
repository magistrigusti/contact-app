import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { CAT_URL } from '../../utils/constans';

export const getProducts = createAsyncThunk(
  "products/getProducts", async (_, thunkAPI) => {
    try {
      const res = await axios(`${CAT_URL}`);
      console.log(res + "ok")
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
console.log(getProducts)

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    //filtered: [],
    //related: [],
    isLoading: false,
  },
  extraReducer: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    } );
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  }
});


export default productsSlice;