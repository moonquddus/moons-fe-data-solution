import { ChartData as ChartJSData, ChartDataset, InteractionItem } from "chart.js"
import { assertIsChartDataFeature, ChartData, validChartDataFeatures } from "../model/chart"
import { ActiveThreadPayload, CommentThread } from "../model/comment"

interface ChartJSTransformReducer {
  labels: string[]
  datasets: ChartDataset<'bar'>[]
}

export function transformDataToChartJSData(data: ChartData[], threads: CommentThread[]): ChartJSData<'bar'> {
  const transformedData: ChartJSTransformReducer = data.reduce(
    (accumulator, singleData) => {
    accumulator.labels.push(singleData.country)
    validChartDataFeatures.forEach((featureName, index) => {
      const thread = threads.find(thread => thread.chartDataPoint.country === singleData.country && thread.chartDataPoint.feature === featureName)
      accumulator.datasets[index].data.push([singleData[featureName], thread?.commentsCount ?? 0])
    })
    return accumulator

  }, {
    labels: [],
    datasets: validChartDataFeatures.map((featureName, index) => {
      return {
        label: featureName,
        backgroundColor: `hsl(${56 * index} 80% 60%)`,
        data: [],
        datalabels: {
          anchor: 'end',
          offset: 20,
          color: 'black',
          formatter: (value) => {
            return value[1] > 0 ? `${value[1]}💬` : ''
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
    chartDataPoint: {
      country: dataset.country,
      feature: featureKey
    }
  }
}
