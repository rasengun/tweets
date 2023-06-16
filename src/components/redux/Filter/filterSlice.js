import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterOption: "show all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterOption: (state, action) => {
      state.filterOption = action.payload;
    },
  },
});

export const { setFilterOption } = filterSlice.actions;

export default filterSlice.reducer;
