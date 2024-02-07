import { AppContext } from '../../store/store'
import { useContext } from 'react'
import { useParams } from 'react-router'
import EditEntity from '../../components/crud/entities/edit/edit'
import {
  useAddWordMutation,
  useGetWordQuery,
  useAmendWordMutation,
} from '../../services/words.redux'
import WorkPage from '../../components/crud/entities/workPage/workPage'

const entityConfig = {
  titles: {
    add: 'Добавить слово',
    edit: 'Изменить слово'
  },
  fields: [
    {
      key: 'word',
      label: 'Слово',
      type: 'textinput'
    },
    {
      key: 'translation',
      label: 'Перевод',
      type: 'textinput'
    },
    {
      key: 'note',
      label: 'Заметка',
      type: 'textinput'
    },
    {
      key: 'hint',
      label: 'Подсказка',
      type: 'textinput'
    },
    {
      key: 'deadline',
      label: 'Срок изучения',
      type: 'dateinput'
    }
  ]
}

export default function EditWord () {
  const { 
    wordId,
    dictionaryId
  } = useParams()
  const id = wordId ? wordId : null
  const {userState} = useContext(AppContext);
  const userId = userState.user.id;
  console.log(wordId, dictionaryId)

  const queryParams = {
    userId,
    entityId: wordId
  }

  const [addWord, addWordResult] = useAddWordMutation()
  const [amendWord, amendWordResult] = useAmendWordMutation()
    
  function handleSave (values) {
    if (id) {
      amendWord()
    } else {
      values.dictionaryId = dictionaryId
      values.createdAt = +new Date()
      values.id = crypto.randomUUID()
      const payload = {
        userId,
        newWord: values
      }
      addWord(payload)
    }
  }

  return (
    <WorkPage>
    <EditEntity 
      entityConfig={entityConfig}
      entityQuery={useGetWordQuery}
      entityId={id}
      entitySave={handleSave}
      queryParams={queryParams}
    />
    </WorkPage>
  )
}