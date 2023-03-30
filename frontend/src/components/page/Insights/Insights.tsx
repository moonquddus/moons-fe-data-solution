import useTitle from "../../../lib/hooks/useTitle"
import InsightsOverview from "../../feature/InsightsOverview/InsightsOverview"

function Insights() {
  useTitle('Insights')
  return (
    <div data-testid='InsightsPage'>
      <h1>Insights</h1>
      <p>I'm guessing there are plenty of excellent insights that can be shown in a fantastic interactive dashboard here!</p>
      <p>... but in the meantime, let's see how many people in France eat hotdogs</p>
      <InsightsOverview />
    </div>
  )
}

export default Insights
