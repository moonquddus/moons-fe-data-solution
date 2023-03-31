import { useEffect, useState } from 'react'
import { matchThread } from '../../../lib/helpers/comments'
import { ActiveThreadPayload } from '../../../lib/model/comment'
import { useGetChartDataQuery } from '../../../lib/service/chart.api'
import { useGetAllThreadsQuery } from '../../../lib/service/coment.api'
import { CLIENT_URL } from '../../../lib/service/config'
import { useLazyGetShareTokenQuery } from '../../../lib/service/share.api'
import Button from '../../element/Button/Button'
import CommentsBox from '../CommentsBox/CommentsBox'
import InsightsChart from '../InsightsChart/InsightsChart'
import ShareButton from '../ShareButton/ShareButton'
import './InsightsOverview.css'

function InsightsOverview() {
  const { data: chartData, isLoading: isLoadingChart, isError } = useGetChartDataQuery()
  const { data: threads, isLoading: isLoadingThreads } = useGetAllThreadsQuery()
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

  const baseClass = 'f-insights-overview'
  return (
    <>
      {!!chartData && (
        <ShareButton />
      )}
      <article className={baseClass}>
        {(isLoadingChart || isLoadingThreads) && (
          <p>Loading chart...</p>
          )}
        {isError && (
          <p>Error loading chart! Try refreshing the page</p>
          )}
        {!!chartData && !!threads &&  (
          <InsightsChart data={chartData} threads={threads} onPointClick={setActiveThread} />
        )}
        <CommentsBox activeThread={activeThread} />
      </article>
    </>
  )
}

export default InsightsOverview
