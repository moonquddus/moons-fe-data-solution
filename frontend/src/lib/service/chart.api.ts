import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChartDataReponse } from '../model/chart'
import { BASE_URL } from './config'

// Reeeeeally should put this in a config somewhere hahaha

export const chartApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
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
