import { configureStore } from '@reduxjs/toolkit'
import { chartApi } from '../service/chart.api'
import { commentApi } from '../service/coment.api'
import { shareApi } from '../service/share.api'

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
