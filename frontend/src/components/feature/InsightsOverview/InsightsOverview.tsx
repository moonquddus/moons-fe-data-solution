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
import './InsightsOverview.css'

function InsightsOverview() {
  const { data: chartData, isLoading: isLoadingChart, isError } = useGetChartDataQuery()
  const { data: threads, isLoading: isLoadingThreads } = useGetAllThreadsQuery()
  const [activeThread, setActiveThread] = useState<ActiveThreadPayload | null>(null)
  const [getShareLink, shareLink] = useLazyGetShareTokenQuery()

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

  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    /**
     * I would have loved to make a share modal that generates the share link, and a "copy to clipboard" button as well!
     * And some privacy settings, it's one of the last things I made at my previous role
     */
    event.preventDefault()
    getShareLink()
  }

  const baseClass = 'f-insights-overview'
  return (
    <>
      <Button onClick={clickHandler}>Generate share link</Button>
      {shareLink.isLoading && (
        <p>Fetching share link...</p>
      )}
      {shareLink.data && (
        <p><strong>URL: {CLIENT_URL}/view-chart/{shareLink.data.token}</strong></p>
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
