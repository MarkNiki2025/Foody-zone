
import SearchResult from "./SearchResult"
import TopContainer from "./TopConteiner"
import {  useEffect, useState } from "react"
import { DATA_URL, localUrl } from "../url"
function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filteredData, setFilteredData] = useState(null);
  const [inputData, setInputData ] = useState(null);

  async function downloadData (url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    const data = await response.json()
    return data
  }

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const data = await downloadData(DATA_URL)
        setData(data)
        setFilteredData(data)
      } catch (error) {
          try {
            const localData = await downloadData(localUrl)
            setData(localData)
            setFilteredData(localData)
          } catch (localError) {
            console.error("Error fetching local food data:", localError)
            console.error("Error fetching food data:", error)
            setError(localError)
          }
      } finally {
        setLoading(false)
      }
    } 
    fetchFoodData()
  }, [])



  function SearchFood (e) {
    const searchValues = e.target.value 
    setInputData(searchValues)
    console.log(inputData)
    if (searchValues === "") {
      setFilteredData(null);
    }

    if (searchValues) {
      const filtered = data?.filter((item) =>
        item.name.toLowerCase().includes(searchValues.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }

  }

  function filterByCatagory (type) {
    if (type === "All") {
      setFilteredData(data);
    } else if (type === "breakfast") {
      const filtered = data?.filter((item) => item.type === type);
      setFilteredData(filtered);
    } else if (type === "lunch") {
      const filtered = data?.filter((item) => item.type === type);
      setFilteredData(filtered);
    } else if (type === "dinner") {
      const filtered = data?.filter((item) => item.type === type);
      setFilteredData(filtered);
    }
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (loading) {
    return <div className="container-fluid bg-primary d-flex justify-content-center fs-5 p-5"><h1 className="fs-5">Loading...</h1></div>
  }

  return (
    <>
      <TopContainer SearchFood = {SearchFood} filterByCatagory = {filterByCatagory} />
      <SearchResult data={filteredData} />
    </>
  )
}
export { DATA_URL }
export default App
