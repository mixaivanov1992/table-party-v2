import { API_URL } from 'http/index';
import { Login, Registration, UserArgs } from '@models/services/User';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
        register: build.mutation<Registration, UserArgs>({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                credentials: 'include',
                body,
                headers: {
                    'X-XSRF-TOKEN': decodeURIComponent(document.cookie.split('XSRF-TOKEN=')[1])
                }
            })
        }),
        login: build.mutation<Login, UserArgs>({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                credentials: 'include',
                body,
                headers: {
                    'X-XSRF-TOKEN': decodeURIComponent(document.cookie.split('XSRF-TOKEN=')[1])
                }
            })
        }),
        me: build.mutation<Login, null>({
            query: () => ({
                url: '/me',
                method: 'POST',
                credentials: 'include',
                headers: {
                    'X-XSRF-TOKEN': decodeURIComponent(document.cookie.split('XSRF-TOKEN=')[1])
                }
            })
        }),
        logout: build.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST',
                credentials: 'include',
                headers: {
                    'X-XSRF-TOKEN': decodeURIComponent(document.cookie.split('XSRF-TOKEN=')[1])
                }
            })
        }),
    })
});

export const {useRegisterMutation, useLoginMutation, useMeMutation, useLogoutMutation} = userApi;