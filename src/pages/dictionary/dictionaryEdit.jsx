import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import EditEntity from '../../components/crud/entities/edit/edit'
import { 
  useAddDictionaryMutation,
  useGetDictionaryQuery,
  useAmendDictionaryMutation
} from '../../services/dictionaries.redux'
import { useMemo } from 'react'
// import { AppContext } from '../../store/store'
import WorkPage from '../../components/crud/entities/workPage/workPage'

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
  const userToken = useSelector((state) => state.auth.token)
  const { dictionaryId: idParam } = useParams()
  const id = idParam ? idParam : null
  // const {userState} = useContext(AppContext);
  // const userId = userState.user.id;
  const queryParams = {userToken, dictionaryId: id}

  const [addDictionary, addDictionaryResult] = useAddDictionaryMutation()
  const [amendDictionary, amendedDictionaryResult] = useAmendDictionaryMutation()

  async function handleAdd (dictionaryData) {
    const payload = {userToken, dictionaryData}

    if (id) {
      payload.dictionaryData.id = id
      await amendDictionary(payload)
    } else {
      await addDictionary(payload)
    }
  }

  const isMutationLoading = useMemo(
    () => addDictionaryResult.isLoading, [addDictionaryResult]
  )

  return (
    <WorkPage>
    <EditEntity 
      entityConfig={entityConfig}
      entityQuery={useGetDictionaryQuery}
      queryParams={queryParams}
      entityID={id}
      entitySave={handleAdd}
      isMutationLoading={isMutationLoading}
      userId={userToken}
    />
    </WorkPage>
  )
}