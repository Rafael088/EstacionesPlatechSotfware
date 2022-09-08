import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import oauthReducer from '../oauth/Slice';
import headerReducer from '../header/Slice'

export default configureStore({
  reducer: {
    oauth:  oauthReducer,
    header: headerReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
