import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import {apiMiddlewares} from './api';
import {
  combineReducers,
  ConfigureStoreOptions,
  Reducer,
} from '@reduxjs/toolkit';
import {searchApi} from './api/search-api';

const rootReducer: Reducer = combineReducers({
  [searchApi.reducerPath]: searchApi.reducer,
});

const middleware = [...apiMiddlewares];

const options: ConfigureStoreOptions = {
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(middleware),
};

export const store = configureStore(options);

setupListeners(store.dispatch);
