import { ChartCountry, ChartDataFeature } from "../model/chart";
import { CommentThread } from "../model/comment";

export function matchThread(threads: CommentThread[], country: ChartCountry, feature: ChartDataFeature): CommentThread | undefined {
  return threads.find(thread => thread.chartDataPoint.country === country && thread.chartDataPoint.feature === feature)
}
