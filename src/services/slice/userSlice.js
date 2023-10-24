import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import {
  ALL_USERS,
  searchById,
  searchUserByUsernameAndId,
} from '../../utils/constants';

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

export const fetchSearchUser = createAsyncThunk(
  'users/fetchSearchUser',
  async function (data, { rejectWithValue }) {
    try {
      console.log(data);
      const res = await fetch(searchUserByUsernameAndId(data));

      if (!res.ok) throw new Error('Server Error!');

      const users = await res.json();

      console.log(users);

      return users;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async function (data, { rejectWithValue, dispatch, getState }) {
    const user = getState().users.users.find((user) => user.id === data.id);

    try {
      const res = await fetch(searchById(user.id));

      if (!res.ok) throw new Error('User not found!');

      dispatch(selectUser(user));
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const setLoading = (state) => {
  state.status = 'loading';
  state.error = null;
};

const setError = (state, action) => {
  state.users = [];
  state.status = 'rejected';
  state.error = action.payload;
};

const initialState = {
  users: [],
  status: '',
  error: null,
  select: null,
  search: '',
  arrSearch: '',
  filteredUsers: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selectUser(state, action) {
      state.select = action.payload;
    },
    searchQuery(state, action) {
      const string = action.payload;
      state.search = string
        .split(',')
        .map((user) => {
          const numberPatter = /\d+/g;
          let subject = user.trim();
          if (!subject) return '';

          subject = subject.match(numberPatter)
            ? `id=${subject}`
            : `username=${
                subject.charAt(0).toUpperCase() +
                subject.slice(1).toLowerCase()
              }`;

          return subject;
        })
        .join('&');
    },
    searchUsers(state, action) {
      const { searchQuery } = action.payload;

      const arrPayload = searchQuery.split(',').map((item) => {
        return item.trim();
      });

      arrPayload.forEach((item) => {
        state.arrSearch = item;
      });
    },
    filteredUsers(state, action) {
      console.log(action);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, setLoading)
      .addCase(fetchUserById.pending, setLoading)
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.users = action.payload;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.user = action.payload;
        state.error = null;
      })
      .addMatcher(isRejectedWithValue(fetchUsers), setError)
      .addMatcher(isRejectedWithValue(fetchUserById), setError);
  },
});

export const { selectUser, searchQuery, searchUsers } = userSlice.actions;

export default userSlice.reducer;
