import { configureStore } from '@reduxjs/toolkit'
import { chartApi } from '../service/chart.api'
import { commentApi } from '../service/coment.api'

const store = configureStore({
  reducer: {
    [chartApi.reducerPath]: chartApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (gDM) => gDM().concat(chartApi.middleware, commentApi.middleware),
  devTools: true,
})

export default store
