import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/urls";
import applyFiltersUtil from "../../utils/applyFilters";

export const fetchData = createAsyncThunk("fetchData", async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  data: [],
  filteredData: [],
  filters: {
    startDate: "",
    endDate: "",
    minRevenue: "",
    maxRevenue: "",
    minNetIncome: "",
    maxNetIncome: "",
  },
  sortConfig: {
    key: "",
    direction: "",
  },
  loading: false,
  error: null,
};

const FinancialData = createSlice({
  name: "FinancialData",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = { ...state.filters, ...payload };
      state.filteredData = applyFiltersUtil(state.data, state.filters);
    },
    setSortConfig: (state, { payload }) => {
      state.sortConfig = payload;
      state.filteredData = sortData(state.filteredData, payload);
    },
    applyFilters: (state) => {
      state.filteredData = applyFiltersUtil(state.data, state.filters);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.filteredData = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
      });
  },
});

const sortData = (data, sortConfig) => {
  const { key, direction } = sortConfig;
  if (!key) return data;

  return [...data].sort((a, b) => {
    if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
    if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
    return 0;
  });
};

export const { setFilters, setSortConfig, applyFilters } =
  FinancialData.actions;
export default FinancialData.reducer;
