import { configureStore } from "@reduxjs/toolkit";
import data from "./data/data";
const store = configureStore({
  reducer: {
    FinancialData: data,
  },
});

export default store;
