import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChartDataPoint } from '../model/chart'
import { CommentThreadsDataResponse, FullCommentThread } from '../model/comment'
import { SERVER_URL } from './config'

interface ApiComment {
  user_name: string
  text: string
}

interface RespondToThreadPayload {
  id: string
  comment: ApiComment
}

interface CreateThreadPayload {
  chartDataPoint: ChartDataPoint
  comment: ApiComment
}

export const commentApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  reducerPath: 'commentApi',
  tagTypes: ['comments', 'thread'],
  endpoints: (build) => ({
    getAllThreads: build.query<CommentThreadsDataResponse, void>({
      query: () => `chart/comment_threads`,
      providesTags: ['comments'],
    }),
    getSingleThread: build.query<FullCommentThread, string>({
      query: (id: string) => `chart/comment_threads/${id}`,
      providesTags: ['thread'],
    }),
    createThread: build.mutation<FullCommentThread, CreateThreadPayload>({
      query: (payload: CreateThreadPayload) => ({
        url: `/chart/comment_threads`,
        method: 'POST',
        body: {
          data_point: payload.chartDataPoint,
          comment: payload.comment,
        }
      }),
      invalidatesTags: ['comments', 'thread'],
    }),
    respondToThread: build.mutation<FullCommentThread, RespondToThreadPayload>({
      query: (payload: RespondToThreadPayload) => ({
        url: `/chart/comment_threads/${payload.id}/respond`,
        method: 'POST',
        body: {
          comment: payload.comment,
        }
      }),
      invalidatesTags: ['comments', 'thread'],
    })
  }),
})

export const { useGetAllThreadsQuery, useLazyGetSingleThreadQuery, useRespondToThreadMutation, useCreateThreadMutation } = commentApi
