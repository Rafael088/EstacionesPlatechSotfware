import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../oauth/Slice';

export default configureStore({
  reducer: {
    oauth: counterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
