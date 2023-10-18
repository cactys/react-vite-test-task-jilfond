import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { ALL_USERS } from '../../utils/constants';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch(ALL_USERS);

      if (!res.ok) throw new Error('Server Error!');

      const users = await res.json();

      return users;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const initialState = {
  users: [],
  status: '',
  error: null,
  user: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selectUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.users = action.payload;
        state.error = null;
      })
      .addMatcher(isRejectedWithValue(fetchUsers), (state, action) => {
        state.users = [];
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { selectUser } = userSlice.actions;

export default userSlice.reducer;
