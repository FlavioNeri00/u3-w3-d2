import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favoritesReducer";
import jobsReducer from "../reducers/jobsReducer";
import persistStore from "redux-persist/es/persistStore";
// import mainReducer from '../reducers'
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { encryptTransform } from "redux-persist-transform-encrypt";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  jobs: jobsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

export const persistor = persistStore(store);
