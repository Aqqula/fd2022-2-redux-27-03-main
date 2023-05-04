import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (params = { res: 5 }, thunkAPI) => {
    try {
      const { dispatch } = thunkAPI;
      const { results } = await fetch(
        'https://randomuser.me/api/?results=' + params.res
      ).then((res) => res.json());
      dispatch(loadUsers(results));
    } catch (error) {}
  }
);
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isFetching: false,
    error: null,
    users: [],
  },
  reducers: {
    loadUsers(state, actions) {
      state.users = actions.payload;
    },
  },
  //without connect
  extraReducer: (builder) => {
    builder.addCase(getAllUsers.pending, (state, actions) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getAllUsers.fulfilled, (state, actions) => {
      state.isFetching = false;
      state.users = actions.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, actions) => {
      state.isFetching = false;
      state.error = actions.payload;
    });
  },
});

const {
  reducer,
  actions: { loadUsers },
} = usersSlice;
export default reducer;
