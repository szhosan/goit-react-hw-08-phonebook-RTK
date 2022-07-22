import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../auth/authSlice';
// import Config from '../../config/env'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  // credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithErrorHandler = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log(result);
  if (!result?.meta?.response?.ok) {
    //console.log('Ошибочка');
    let errorMessage = '';
    switch (result.meta.response.status) {
      case '400':
        errorMessage = 'Email or password is incorrect';
        break;
      case '401':
        errorMessage = 'Email or password is incorrect';
        break;
      default:
        errorMessage = 'Something went wrong! Try again!';
    }
    api.dispatch(logOut());
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithErrorHandler,
  endpoints: builder => ({}),
});
