import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../../features/oauth/Slice';

export default configureStore({
  reducer: {
    oauth: counterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
