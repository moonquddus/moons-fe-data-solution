import { transformDataToChartJSData } from "../chart"
import { createChartData, createCommentThreads } from "../../testing/fixtures"

describe('transformDataToChartJSData', () => {
  it('should transform api data to a Chart JS model', () => {
    const data = createChartData()
    const threads = createCommentThreads()
    expect(transformDataToChartJSData(data, threads)).toMatchSnapshot()
  })
})
