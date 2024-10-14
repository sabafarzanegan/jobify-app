import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type initialFiltersStateType = {
  search: string | undefined;
  status: string | undefined;
  type: string | undefined;
  sort: string | undefined;
  page?: number | undefined;
};

// export type Pagetype = {
//   Page: string | undefined;
// };
const initialFiltersState: initialFiltersStateType = {
  search: "",
  status: "",
  type: "",
  sort: "",
  page: 1,
};
const jobSlice = createSlice({
  name: "job",
  initialState: initialFiltersState,
  reducers: {
    addfilter: (state, action: PayloadAction<initialFiltersStateType>) => {
      const newFilter = action.payload;
      state.search = newFilter.search;
      state.sort = newFilter.sort;
      state.status = newFilter.status;
      state.type = newFilter.type;
    },
    handlePage: (state, action) => {
      const newPage = action.payload;
      console.log(newPage);
      state.page += newPage.Page;
    },
  },
});
export const { addfilter, handlePage } = jobSlice.actions;

export default jobSlice.reducer;
