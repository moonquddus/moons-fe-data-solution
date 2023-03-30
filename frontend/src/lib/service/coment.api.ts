import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CommentThreadsDataResponse, FullCommentThread } from '../model/comment'

const BASE_URL = 'http://localhost:8000'

export const commentApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  reducerPath: 'commentApi',
  tagTypes: ['comment'],
  endpoints: (build) => ({
    getAllThreads: build.query<CommentThreadsDataResponse, void>({
      query: () => `chart/comment_threads`,
    }),
    getSingleThread: build.query<FullCommentThread, string>({
      query: (id: string) => `chart/comment_threads/${id}`,
    }),
  }),
})

export const { useGetAllThreadsQuery, useLazyGetSingleThreadQuery } = commentApi
