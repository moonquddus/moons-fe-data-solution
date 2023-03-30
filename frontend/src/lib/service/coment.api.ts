import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://localhost:8000'

export const commentApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  reducerPath: 'commentApi',
  tagTypes: ['comment'],
  endpoints: (build) => ({
    getAllThreads: build.query<any, void>({
      query: () => `chart/comment_threads`,
    }),
  }),
})

export const { useGetAllThreadsQuery } = commentApi
