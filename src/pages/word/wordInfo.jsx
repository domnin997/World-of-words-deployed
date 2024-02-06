import { useParams } from 'react-router'
import Info from '../../components/crud/entities/info/info'
import WorkPage from '../../components/crud/entities/workPage/workPage'
import { useGetWordQuery } from '../../services/words.redux'
import { AppContext } from '../../store/store'
import { useContext } from 'react'

export default function WordInfo () {
  const entityConfig = {
    titles: {
      info: 'Информация о слове'
    },
    fields: [
      { key: 'word', label: 'Слово' },
      { key: 'translation', label: 'Перевод' },
      { key: 'note', label: 'Описание' },
      { key: 'hint', label: 'Подсказка' },
      { key: 'createdAt', label: 'Добавлено в словарь' },
      { key: 'deadline', label: 'Срок изучения' }
    ]
  }
  const { wordId: entityId } = useParams()
  
  const {userState} = useContext(AppContext)
  const userId = userState.user.id

  return (
    <WorkPage>
      <Info
        entityConfig={entityConfig}
        entityQuery={useGetWordQuery}
        entityId={entityId}
        userId={userId}
      />
    </WorkPage>
  )
}