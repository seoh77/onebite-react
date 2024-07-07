// store.js : reducer로 global store을 만들 redux store
import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'todos',
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;

const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

export default store;
