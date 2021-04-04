import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currencySlice from "./appReducer";

const rootReducer = combineReducers({ app: currencySlice });

export const store = configureStore({ reducer: rootReducer });
