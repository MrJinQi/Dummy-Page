import { combineReducers } from "@reduxjs/toolkit";

import languageReducer from "./language/languageSlice";

export const rootReducer = combineReducers({
  language: languageReducer,
});
