import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BlogState {
  isSearch: boolean;
  searchValue: string;
}
const initialState: BlogState = {
  isSearch: false,
  searchValue: "",
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    changeSearchStatus: (state: BlogState, action: PayloadAction<boolean>) => {
      state.isSearch = action.payload;
    },
    setSearchValue: (state: BlogState, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { changeSearchStatus, setSearchValue } = blogSlice.actions;

export default blogSlice.reducer;
