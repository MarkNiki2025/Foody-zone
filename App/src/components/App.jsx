import MainPart from "./MainPart"
import TopContainer from "./TopConteiner"
import { useState } from "react"
const DATA_URL = "http://localhost:9000"
function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchFoodData = async () => {
    try {
      const response = await fetch(DATA_URL)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error("Error fetching food data:", error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  fetchFoodData()

  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <TopContainer />
      <MainPart dataAll={data} BASE_URL={DATA_URL} />
    </>
  )
}

export default App
