import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/App/appSlice';
import twitterReducer from '../features/Twitter/TwitterAppSlice';
import ecommerceReducer from '../features/ecommerce/ecommerceSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    ecommerceApp: ecommerceReducer,
    twitter: twitterReducer
  },
});
