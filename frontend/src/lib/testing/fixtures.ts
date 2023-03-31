import { ChartData } from "../model/chart";
import { ActiveThreadPayload, Comment, CommentThread } from "../model/comment";

export function createComment(override: Partial<Comment> = {}): Comment {
  return {
    userName: 'Moon',
    text: 'Yoooooo check out this comment',
    ...override,
  }
}

export function createNewActiveThread(override: Partial<ActiveThreadPayload> = {}): ActiveThreadPayload {
  return {
    chartDataPoint: {
      country: 'GB',
      feature: 'kebab',
    },
    ...override
  }
}

export function createActiveThread(override: Partial<ActiveThreadPayload> = {}): ActiveThreadPayload {
  return {
    ...createNewActiveThread(),
    id: 'thread-id',
    ...override
  }
}

export function createChartDataPoint(override: Partial<ChartData>): ChartData {
  return {
    country: 'GB',
    hotdog: 24,
    burger: 2642,
    sandwich: 42,
    fries: 246,
    kebab: 23,
    donut: 1,
    ...override,
  }
}


export function createChartData(override: ChartData[] = []): ChartData[] {
  return [
    createChartDataPoint({country: 'GB'}),
    createChartDataPoint({country: 'IT'}),
    ...override,
  ]
}

export function createCommentThread(override: Partial<CommentThread> = {}): CommentThread {
  return {
    id: 'thread-1',
    commentsCount: 35,
    chartDataPoint: {
      country: 'GB',
      feature: 'kebab',
    },
    ...override,
  }
}

export function createCommentThreads(override: CommentThread[] = []): CommentThread[] {
  return [
    createCommentThread(),
    createCommentThread({
      id: 'thread-2',
      commentsCount: 2,
      chartDataPoint: {
        country: 'IT',
        feature: 'donut',
      }
    }),
    ...override,
  ]
}