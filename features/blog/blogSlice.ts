import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BlogState {
  isSearch: boolean;
}
const initialState: BlogState = {
  isSearch: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    changeSearchStatus: (state: BlogState, action: PayloadAction<boolean>) => {
      state.isSearch = action.payload;
    },
  },
});

export const { changeSearchStatus } = blogSlice.actions;

export default blogSlice.reducer;
