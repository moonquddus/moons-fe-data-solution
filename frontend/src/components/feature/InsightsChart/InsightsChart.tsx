import { BarElement, CategoryScale, Chart, ChartOptions, Legend, LinearScale, Tooltip, TooltipItem, TooltipModel } from 'chart.js'
import { MouseEvent, useMemo, useRef } from 'react'
import { Bar, getElementAtEvent } from 'react-chartjs-2'
import { ChartData } from '../../../lib/model/chart'
import { transformDataToChartJSData, transformElementToThread } from '../../../lib/transformers/chart'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import './InsightsChart.css'
import { ActiveThreadPayload, CommentThread } from '../../../lib/model/comment'

interface InsightsChartProps {
  data: ChartData[]
  threads?: CommentThread[]
  onPointClick?: (payload: ActiveThreadPayload) => void
}

function InsightsChart(props: InsightsChartProps) {
  const {data, threads = [], onPointClick = () => {}} = props
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

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(this: TooltipModel<"bar">, tooltipItem: TooltipItem<"bar">) {
            const value = Array.isArray(tooltipItem.raw) ? tooltipItem.raw[0] : 0
            return `${tooltipItem.dataset.label}: ${value}`
          }
        }
      }
    }
  }

  const baseClass = 'f-insights-chart'
  return (
    <Bar ref={chartRef} className={baseClass} options={options} data={transformedData} onClick={clickHandler} updateMode='resize' />
  )
}

export default InsightsChart
