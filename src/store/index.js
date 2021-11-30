import { configureStore } from '@reduxjs/toolkit';
// reducer
import movies from './slices/movies';

export default configureStore({
  reducer: {
    movies
  }
});