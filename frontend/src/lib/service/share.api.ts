import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ShareResponse } from '../model/share'
import { SERVER_URL } from './config'

export const shareApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  reducerPath: 'shareApi',
  tagTypes: ['share'],
  endpoints: (build) => ({
    getShareToken: build.query<ShareResponse, void>({
      query: () => `share`,
    }),
  }),
})

export const { useLazyGetShareTokenQuery } = shareApi
