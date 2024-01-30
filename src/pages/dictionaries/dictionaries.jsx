import './dictionaries.css'
import CrudEntitiesList from '../../components/crud/entities/list/list'
import {ReactComponent as DeleteIcon} from '../../assets/icons/delete-icon.svg'
import WorkPage from '../../components/crud/entities/workPage/workPage'
import { useGetDictionariesQuery } from '../../services/dictionaries.redux'

export default function Dictionaries () {
  // Создаем фильтры через CrudFilters - создаем конфигурацию
  // Создаем список карточек из полученной от back информации
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
  return (
    <WorkPage>
      <CrudEntitiesList
        entityConfig={entityConfig}
        entitiesQuery={useGetDictionariesQuery}
      />
    </WorkPage>
  )
}