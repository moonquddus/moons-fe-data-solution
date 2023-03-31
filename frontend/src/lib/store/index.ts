import { configureStore } from '@reduxjs/toolkit'
import { chartApi } from '../service/chart.api'
import { commentApi } from '../service/coment.api'
import { shareApi } from '../service/share.api'

/**
 * I made a choice not to create a slice of any kind
 * Stuck with the api middleware (RTK <3) and it does the job with not too much code
 */
const store = configureStore({
  reducer: {
    [chartApi.reducerPath]: chartApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [shareApi.reducerPath]: shareApi.reducer,
  },
  middleware: (gDM) => gDM().concat(chartApi.middleware, commentApi.middleware, shareApi.middleware),
  devTools: true,
})

export default store
