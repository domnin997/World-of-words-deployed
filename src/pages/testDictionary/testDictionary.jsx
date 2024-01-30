import CrudEntitiesList from '../../components/crud/entities/list/list'
import {ReactComponent as DeleteIcon} from '../../assets/icons/delete-icon.svg'
import {ReactComponent as StarIcon} from '../../assets/icons/star-filled.svg'
import WorkPage from '../../components/crud/entities/workPage/workPage'
import { useGetWordsQuery } from '../../services/words.redux'

export default function TestDictionary () {
  const entityConfig = {
    titles: {
      index: 'Слова',
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
    ]
  }
  return (
    <WorkPage>
      <CrudEntitiesList 
        entityConfig={entityConfig}
        entitiesQuery={useGetWordsQuery}
      />
    </WorkPage>
  )
}