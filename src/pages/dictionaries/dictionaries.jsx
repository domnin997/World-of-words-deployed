import './dictionaries.css'
import CrudEntitiesList from '../../components/crud/entities/list/list'
import { useMemo } from 'react'
import {ReactComponent as DeleteIcon} from '../../assets/icons/delete-icon.svg'
import WorkPage from '../../components/crud/entities/workPage/workPage'
import { 
  useGetDictionariesQuery,
  useDeleteDictionaryMutation 
} from '../../services/dictionaries.redux'

export default function Dictionaries () {
  // Создаем фильтры через CrudFilters - создаем конфигурацию
  const entityConfig = {
    titles: {
      index: 'Мои словари',
      add: 'Добавить словарь'
    },
    textFields: [
      {
        key: 'word',
        content: (dictionary) => (<span>{dictionary.name}</span>)
      },
    ],
    actions: [
      {
        key: 'delete',
        class: 'del-icon',
        icon: DeleteIcon,
      },
    ],
    add: true,
  }

  const [deleteDictionary, deleteDictionaryResult] = useDeleteDictionaryMutation()
  const entityActions = useMemo(
    () => ({
      delete: {
        handler: (userId, entity) => {
          const id = entity.id;
          const payload = {userId, dictionaryId: id}
          deleteDictionary(payload)
        },
        mutation: {
          result: deleteDictionaryResult,
        },
      },
    }),
    [deleteDictionary, deleteDictionaryResult]
  )

  return (
    <WorkPage>
      <CrudEntitiesList
        entityConfig={entityConfig}
        entitiesQuery={useGetDictionariesQuery}
        entityActions={entityActions}
      />
    </WorkPage>
  )
}