import { useParams } from 'react-router'
import Info from '../../components/crud/entities/info/info'
import WorkPage from '../../components/crud/entities/workPage/workPage'
import { useGetWordQuery } from '../../services/words.redux'
import { useSelector } from 'react-redux'

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
    ],
    add: true
  }
  const { wordId: entityId } = useParams()
  const userToken = useSelector((state) => state.auth.token)

  return (
    <WorkPage>
      <Info
        entityConfig={entityConfig}
        entityQuery={useGetWordQuery}
        entityId={entityId}
        userId={userToken}
      />
    </WorkPage>
  )
}