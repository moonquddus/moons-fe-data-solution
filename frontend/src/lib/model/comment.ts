import { ChartDataPoint } from "./chart"

export interface CommentThread {
  id: string
  commentsCount: number
  chartDataPoint: ChartDataPoint
}

export interface ActiveThreadPayload {
  id?: string
  chartDataPoint: ChartDataPoint
}
