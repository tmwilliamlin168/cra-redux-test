import { configureStore } from '@reduxjs/toolkit';
import a from './a';
import b from './b';

export const store = configureStore({
  reducer: { a, b },
});
