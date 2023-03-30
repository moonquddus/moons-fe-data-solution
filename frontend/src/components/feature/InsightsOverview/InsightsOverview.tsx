import { useEffect, useState } from 'react'
import { matchThread } from '../../../lib/helpers/comments'
import { ActiveThreadPayload } from '../../../lib/model/comment'
import { useGetChartDataQuery } from '../../../lib/service/chart.api'
import { useGetAllThreadsQuery } from '../../../lib/service/coment.api'
import CommentsBox from '../CommentsBox/CommentsBox'
import InsightsChart from '../InsightsChart/InsightsChart'
import './InsightsOverview.css'

function InsightsOverview() {
  const { data: chartData, isLoading, isError } = useGetChartDataQuery()
  const { data: threads } = useGetAllThreadsQuery()
  const [activeThread, setActiveThread] = useState<ActiveThreadPayload | null>(null)

  useEffect(() => {
    // If the threads have been refetched, then make sure active thread is still correct
    if (!threads || !activeThread || activeThread?.id) return

    const foundThread = matchThread(threads, activeThread.chartDataPoint.country, activeThread.chartDataPoint.feature)
    if (foundThread){
      setActiveThread({
        ...activeThread,
        id: foundThread.id,
      })
    }
  }, [threads])

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
