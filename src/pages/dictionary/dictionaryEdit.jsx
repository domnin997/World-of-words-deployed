import { useParams } from 'react-router-dom'
import EditEntity from '../../components/crud/entities/edit/edit'

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
  
  return (
    <EditEntity 
      entityConfig={entityConfig}
      entityQuery={'placeholder'}
      entityID={id}
      entitySave={'placeholder'}
    />
  )
}