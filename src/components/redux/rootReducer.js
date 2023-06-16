import { combineReducers } from "@reduxjs/toolkit";

import filterReducer from "./Filter/filterSlice";

const rootReducer = combineReducers({
  filter: filterReducer,
});

export default rootReducer;
