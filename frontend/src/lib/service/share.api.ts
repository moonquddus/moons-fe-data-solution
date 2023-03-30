import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ShareResponse } from '../model/share'
import { BASE_URL } from './config'

export const shareApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  reducerPath: 'shareApi',
  tagTypes: ['share'],
  endpoints: (build) => ({
    getShareToken: build.query<ShareResponse, void>({
      query: () => `share`,
    }),
  }),
})

export const { useLazyGetShareTokenQuery } = shareApi
