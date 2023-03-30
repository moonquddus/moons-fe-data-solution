import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChartDataReponse } from '../model/chart'

// Reeeeeally should put this in a config somewhere hahaha
const BASE_URL = 'http://localhost:8000'

export const chartApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  reducerPath: 'chartApi',
  tagTypes: ['chart'],
  endpoints: (build) => ({
    getChartData: build.query<ChartDataReponse, void>({
      query: () => `chart/data`,
    }),
  }),
})

export const { useGetChartDataQuery } = chartApi
