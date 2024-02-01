import { useParams } from 'react-router-dom'
import EditEntity from '../../components/crud/entities/edit/edit'
import { 
  useAddDictionaryMutation,
  useGetDictionaryQuery
} from '../../services/dictionaries.redux'
import { useContext } from 'react'
import { AppContext } from '../../store/store'

const entityConfig = {
  titles: {
    add: 'Добавление словаря',
    edit: 'Изменение словаря'
  },
  fields: [
    {
      key: 'name',
      label: 'Название',
      type: 'textinput'
    },
    {
      key: 'description',
      label: 'Описание',
      type: 'textinput'
    }
  ]
}

export default function EditDictionary () {
  
  const { dictionaryId: idParam } = useParams()
  const id = idParam ? parseInt(idParam) : null
  const {userState} = useContext(AppContext);

  const userId = userState.user.id;

  const [addDictionary, addDictionaryResult] = useAddDictionaryMutation()
  // const [getDictionary, getDictionaryResult] = useGetDictionaryQuery()

  async function handleAdd (newDictionary) {
    const payload = {userId, newDictionary};
    await addDictionary(payload);
  }

  return (
    <EditEntity 
      entityConfig={entityConfig}
      entityQuery={useGetDictionaryQuery}
      entityID={id}
      entitySave={handleAdd}
      userId={userId}
    />
  )
}