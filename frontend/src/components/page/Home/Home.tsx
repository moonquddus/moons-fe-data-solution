import { Link } from "react-router-dom"

function Home() {
    return (
      <div data-testid='HomePage'>
        <h1>Homepage</h1>
        <p>The main part of a dashboard probably goes here! Click on <Link to="/insights">Insights</Link> for the good stuff</p>
      </div>
    )
  }
  
  export default Home
