import CrudEntitiesList from '../../components/crud/entities/list/list'
import {ReactComponent as DeleteIcon} from '../../assets/icons/delete-icon.svg'
import {ReactComponent as StarIcon} from '../../assets/icons/star-filled.svg'
import WorkPage from '../../components/crud/entities/workPage/workPage'
import {
  useGetWordsQuery,
  useDeleteWordMutation
} from '../../services/words.redux'
import { useParams } from 'react-router'
import { useMemo } from 'react'

export default function TestDictionary () {
  const { dictionaryId: id } = useParams()
  const entityConfig = {
    titles: {
      index: 'Слова',
    },
    style: {
      direction: 'vertical',
    },
    textFields: [
      {
        key: 'word',
        content: (word) => (<span>{word.word}</span>)
      },
      {
        key: 'translation',
        content: (word) => (<span>{word.translation}</span>)
      },
    ],
    actions: [
      {
        key: 'favorite',
        class: 'star-icon',
        icon: StarIcon,
      },
      {
        key: 'delete',
        class: 'del-icon',
        icon: DeleteIcon,
      },
    ],
    add: true,
  }

  const [deleteWord, deleteWordResult] = useDeleteWordMutation()

  const entityActions = useMemo(
    () => ({
      delete: {
        handler: (entity, userId) => {
          const id = entity.id;
          const payload = {userId, dictionaryId: id}
          deleteWord(payload)
        },
        mutation: {
          result: deleteWordResult,
        },
      }
    }),
    [deleteWord, deleteWordResult]
  )

  return (
    <WorkPage>
      <CrudEntitiesList
        id={id}
        entityConfig={entityConfig}
        entitiesQuery={useGetWordsQuery}
        entityActions={entityActions}
      />
    </WorkPage>
  )
}