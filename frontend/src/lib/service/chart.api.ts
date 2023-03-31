import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChartDataReponse } from '../model/chart'
import { SERVER_URL } from './config'

export const chartApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  reducerPath: 'chartApi',
  tagTypes: ['chart', 'shared-chart'],
  endpoints: (build) => ({
    getChartData: build.query<ChartDataReponse, void>({
      query: () => `chart/data`,
      providesTags: ['chart'],
    }),
    getChartFromToken: build.query<ChartDataReponse, string>({
      query: (id: string) => `chart/shared/${id}`,
      providesTags: ['shared-chart'],
    }),
  }),
})

export const { useGetChartDataQuery, useGetChartFromTokenQuery } = chartApi
