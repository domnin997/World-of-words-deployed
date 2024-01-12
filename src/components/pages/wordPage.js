import { useParams } from "react-router"

export default function WordPage () {
  const {wordId} = useParams();

  return (
    <div>Страница слова с ID: {wordId}</div>
  )
}