import { ChartDataPoint } from "./chart"

export type CommentThreadsDataResponse = CommentThread[]

export interface CommentThread {
  id: string
  commentsCount: number
  chartDataPoint: ChartDataPoint
}

export type FullCommentThread = CommentThread & {
  comments: Comment[]
}

export interface Comment {
  userName: string
  text: string
}

export interface ActiveThreadPayload {
  id?: string
  chartDataPoint: ChartDataPoint
}
