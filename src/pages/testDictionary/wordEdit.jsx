import { AppContext } from '../../store/store'
import { useContext } from 'react'
import { useParams } from 'react-router'
import EditEntity from '../../components/crud/entities/edit/edit'
import { useAddWordMutation, useGetWordsQuery } from '../../services/words.redux'
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
  const { dictionaryId: idParam } = useParams()
  const id = idParam ? parseInt(idParam) : null
  const {userState} = useContext(AppContext);
  const userId = userState.user.id;

  const [addWord, addWordResult] = useAddWordMutation()
    
  function handleSave (values) {
    values.dictionaryId = idParam
    values.createdAt = +new Date()
    values.id = crypto.randomUUID()
    const payload = {
      userId,
      newWord: values
    }
    console.log(payload)
    addWord(payload)
  }

  return (
    <WorkPage>
    <EditEntity 
      entityConfig={entityConfig}
      entityQuery={useGetWordsQuery}
      entityID={id}
      entitySave={handleSave}
    />
    </WorkPage>
  )
}