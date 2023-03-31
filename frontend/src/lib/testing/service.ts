import fetchMock from 'fetch-mock'
import { ChartDataResponse } from '../model/chart'
import { CommentThreadsDataResponse, FullCommentThread } from '../model/comment'
import { ShareResponse } from '../model/share'
import { SERVER_URL } from '../service/config'
import getChartDataResponse from './__fixtures__/chartDataResponse.fixture'
import getCommentThreadsResponse from './__fixtures__/commentThreadsResponse.fixture'
import getThreadResponse from './__fixtures__/threadResponse.fixture'
import getShareResponse from './__fixtures__/shareResponse.fixture'

export function mockGetChartData(override: Partial<ChartDataResponse> = []): void {
  fetchMock.get(`${SERVER_URL}/chart/data`, {
    ...getChartDataResponse,
    ...override
  })
}

export function mockGetCommentThreads(override: Partial<CommentThreadsDataResponse> = []): void {
  fetchMock.get(`${SERVER_URL}/chart/comment_threads`, {
    ...getCommentThreadsResponse,
    ...override
  })
}

export function mockGetSingleThread(id: string = 'thread-id', override: Partial<FullCommentThread> = {}): void {
  fetchMock.get(`${SERVER_URL}/chart/comment_threads/${id}`, {
    ...getThreadResponse,
    ...override
  })
}

export function mockGetShareLink(override: Partial<ShareResponse> = {}): void {
  fetchMock.get(`${SERVER_URL}/share`, {
    ...getShareResponse,
    ...override
  })
}

export function mockGetSharedChart(override: Partial<ChartDataResponse> = []): void {
  fetchMock.get(`${SERVER_URL}/chart/shared/123-abc`, {
    ...getChartDataResponse,
    ...override
  })

  fetchMock.get(`${SERVER_URL}/chart/shared/incorrect`, 404)
}
