import { ChartData as ChartJSData, ChartDataset, InteractionItem } from "chart.js"
import { matchThread } from "../helpers/comments"
import { assertIsChartDataFeature, ChartData, validChartDataFeatures } from "../model/chart"
import { ActiveThreadPayload, CommentThread } from "../model/comment"

interface ChartJSTransformReducer {
  labels: string[]
  datasets: ChartDataset<'bar'>[]
}

export function transformDataToChartJSData(data: ChartData[], threads: CommentThread[]): ChartJSData<'bar'> {
  // apologies, I hate overly complicated reducers but I went past the point of no return...
  const transformedData: ChartJSTransformReducer = data.reduce(
    (accumulator, singleData) => {
    accumulator.labels.push(singleData.country)
    validChartDataFeatures.forEach((featureName, index) => {
      const thread = matchThread(threads, singleData.country, featureName)
      accumulator.datasets[index].data.push([singleData[featureName], (thread?.commentsCount ?? 0) / 10000])
    })
    return accumulator

  }, {
    // this part sets the data structure
    labels: [],
    datasets: validChartDataFeatures.map((featureName, index) => {
      return {
        label: featureName,
        backgroundColor: `hsl(${56 * index} 80% 60%)`,
        data: [],
        datalabels: {
          anchor: 'end',
          color: 'black',
          formatter: (value) => {
            return value[1] > 0 ? `${value[1] * 10000}🗨️` : ''
          },
        },
      }
    })
  } as ChartJSTransformReducer)

  return transformedData
}

export function transformElementToThread(element: InteractionItem, data: ChartData[], threads: CommentThread[]): ActiveThreadPayload {
  const dataset = data[element.index]

  const featureKey = Object.keys(dataset)[element.datasetIndex + 1]
  assertIsChartDataFeature(featureKey)


  return {
    id: matchThread(threads, dataset.country, featureKey)?.id ?? undefined,
    chartDataPoint: {
      country: dataset.country,
      feature: featureKey
    }
  }
}
