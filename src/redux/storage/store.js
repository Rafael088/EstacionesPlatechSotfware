import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import oauthReducer from '../oauth/Slice';
import headerReducer from '../header/Slice'
import sensorReducer from '../sensor/Slice'

export default configureStore({
  reducer: {
    oauth : oauthReducer,
    header: headerReducer,
    sensor: sensorReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
