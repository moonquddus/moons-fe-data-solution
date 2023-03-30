import { useState } from 'react'
import { ActiveThreadPayload } from '../../../lib/model/comment'
import { useGetChartDataQuery } from '../../../lib/service/chart.api'
import { useGetAllThreadsQuery } from '../../../lib/service/coment.api'
import CommentsBox from '../CommentsBox/CommentsBox'
import InsightsChart from '../InsightsChart/InsightsChart'
import './InsightsOverview.css'

function InsightsOverview() {
  const { data: chartData, isLoading, isFetching, isError } = useGetChartDataQuery()
  const { data: threads } = useGetAllThreadsQuery()
  const [activeThread, setActiveThread] = useState<ActiveThreadPayload | null>(null)

  if (isError){
    console.error(chartData)
  }

  const baseClass = 'f-insights-overview'
  return (
    <article className={baseClass}>
      {!!chartData && !!threads &&  (
        <InsightsChart data={chartData} threads={threads} onPointClick={setActiveThread} />
      )}
      <CommentsBox activeThread={activeThread} />
    </article>
  )
}

export default InsightsOverview
