import { useParams } from "react-router-dom"
import useTitle from "../../../lib/hooks/useTitle"
import { useGetChartFromTokenQuery } from "../../../lib/service/chart.api"
import InsightsChart from "../../feature/InsightsChart/InsightsChart"
import './ViewChart.css'

function ViewChart() {
  const { id = '' } = useParams()
  const { data, isLoading, isError } = useGetChartFromTokenQuery(id)
  useTitle('Shared chart')

  if (isError){
    console.error(data)
  }

  const baseClass = 'p-view-chart'
  return (
    <main tabIndex={1} className={`${baseClass}`}>
      <h1>Public chart</h1>
      <p>Here's an awesome chart, shared with you by an even more awesome person</p>
      <div className={`${baseClass}__container`}>
        {isLoading && (
          <p>Loading...</p>
        )}
        {isError && (
          <p>Error loading page! Please contact the owner of the chart.</p>
        )}
        {data && (
          <InsightsChart data={data} />
        )}

      </div>
    </main>
  )
  }
  
  export default ViewChart
