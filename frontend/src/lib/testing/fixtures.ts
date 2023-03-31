import { ActiveThreadPayload, Comment } from "../model/comment";

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