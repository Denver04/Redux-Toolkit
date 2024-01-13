import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useDispatchWrapper } from "./useDispatch";

export const fruitCakeInitialState = {
  cakeLike: 1,
  cakeComment: 0,
  cakeShare: 0,
  loading: 0,
  data: [],
  loadingData: 0,
};

export const fetchUser = createAsyncThunk("fetchBusinessPolicyCustomerInfo", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
})

const fruitCakeSlice = createSlice({
  name: "fruitCake",
  initialState: fruitCakeInitialState,
  reducers: {
    progress: (state, action) => {
      state.loading = 1;
    },
    ordered: (state, action) => {
      const { data } = action.payload;
      state.cakeLike = 9;
      state.cakeComment += 0;
      state.cakeShare += 0;
      state.loading = 2;
    },
    failed: (state, action) => {
      state.loading = 3;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.loadingData = 1;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loadingData = 2;
      state.data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loadingData = 3;
    })
  }
});

export const handlefruitCakeLike = (amount) => {
  return async (dispatch, getState) => {
    const currentState = getState();
    try {
      if (currentState.fruitCake.loading === 3) {
        alert("loading 3");
      };
      dispatch(progress());
      dispatch(ordered(amount));
    } catch (error) {
      console.warn("error", error);
      dispatch(failed());
    }
  };
};

export default fruitCakeSlice.reducer;
export const { progress, ordered, failed } = fruitCakeSlice.actions;
