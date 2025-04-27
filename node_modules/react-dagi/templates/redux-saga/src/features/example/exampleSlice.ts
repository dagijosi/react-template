import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ExampleState = {
  data: null,
  loading: false,
  error: null,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    fetchData(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.data = null;
      state.loading = false;
      state.error = action.payload;
    },
    clearData(state) {
      state.data = null;
      state.error = null;
      state.loading = false;
    }
  },
});

export const { fetchData, fetchDataSuccess, fetchDataFailure, clearData } = exampleSlice.actions;

export default exampleSlice.reducer;

