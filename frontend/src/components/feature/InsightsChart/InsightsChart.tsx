import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from 'chart.js'
import { MouseEvent, useMemo, useRef } from 'react'
import { Bar, getElementAtEvent } from 'react-chartjs-2'
import { ChartData } from '../../../lib/model/chart'
import { transformDataToChartJSData, transformElementToThread } from '../../../lib/transformers/chart'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import './InsightsChart.css'
import { ActiveThreadPayload, CommentThread } from '../../../lib/model/comment'

interface InsightsChartProps {
  data: ChartData[]
  threads: CommentThread[]
  onPointClick: (payload: ActiveThreadPayload) => void
}

function InsightsChart(props: InsightsChartProps) {
  const {data, threads, onPointClick} = props
  const chartRef = useRef(null)

  const clickHandler = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef
    if (!chart) return

    onPointClick(transformElementToThread(getElementAtEvent(chart, event)[0], data, threads))
  }

  const transformedData = useMemo(() => {
    return transformDataToChartJSData(data, threads)
  }, [data, threads])

  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    ChartDataLabels
  )

  const options = {
    responsive: true,
  }

  const baseClass = 'f-insights-chart'
  return (
    <Bar ref={chartRef} className={baseClass} options={options} data={transformedData} onClick={clickHandler} />
  )
}

export default InsightsChart
