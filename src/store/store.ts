import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { swApi } from './slice/swapi/service';

export const store = configureStore({
  reducer: {
    [swApi.reducerPath]: swApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(swApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
