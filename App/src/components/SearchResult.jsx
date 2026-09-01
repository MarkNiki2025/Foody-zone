import MainPart from './MainPart'
import { DATA_URL } from './App'
export default function SearchResult({ data, }) {
  return (
    <MainPart dataAll={data} BASE_URL={DATA_URL} />
  )
}