import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './slice/userSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
