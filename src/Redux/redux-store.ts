import { configureStore } from "@reduxjs/toolkit";
import localStorageMiddleware from "../LocalStorage/localStorageMiddleware";
import formSettingsReducer from "./form-slice";
const persistedState = localStorage.getItem('appState')
  ? JSON.parse(localStorage.getItem('appState') as string)
  : {};

const store = configureStore({
  reducer: {
    formSettings: formSettingsReducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;
