import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChartDataResponse } from '../model/chart'
import { SERVER_URL } from './config'

export const chartApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  reducerPath: 'chartApi',
  tagTypes: ['chart', 'shared-chart'],
  endpoints: (build) => ({
    getChartData: build.query<ChartDataResponse, void>({
      query: () => `chart/data`,
      providesTags: ['chart'],
    }),
    getChartFromToken: build.query<ChartDataResponse, string>({
      query: (id: string) => `chart/shared/${id}`,
      providesTags: ['shared-chart'],
    }),
  }),
})

export const { useGetChartDataQuery, useGetChartFromTokenQuery } = chartApi
