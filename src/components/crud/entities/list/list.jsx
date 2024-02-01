import './list.css'
import LoadingSign from '../../../loader/loadingSign'
import { PageLayoutContext } from '../../../../context/layoutContext'
import { useContext } from 'react'
import { createPortal } from 'react-dom'
import { AppContext } from '../../../../store/store'
import { useNavigate } from 'react-router'

export default function CrudEntitiesList ({
  id,
  entityConfig,
  entitiesQuery,
  entityFilters,
  entityActions
}) {
  const navigate = useNavigate();
  const {userState} = useContext(AppContext);

  const queryParams = {}
  queryParams.userId = userState.user.id;
  if (id) {
    queryParams.entityId = id
  }
  console.log(queryParams)
  const {
    data,
    isLoading
  } = entitiesQuery(queryParams)
  console.log(data)
  const {
    headerLeftElement,
    headerRightElement,
  } = useContext(PageLayoutContext);
  
  function createContent () {
    if (isLoading) {
      return <LoadingSign />
    } else {
      return (
        <>
        {headerLeftElement && createPortal(
          <h2>
            {entityConfig.titles.index}
          </h2>,
          headerLeftElement
        )}
        {headerRightElement && entityConfig.add && createPortal(
          <button className='header-right__btn' onClick={() => navigate('create')}>
            Добавить
          </button>,
          headerRightElement
        )}
        <ul className='entities-wrap'>
          {data && data.map((entityData) => (
            <li className='words-list-item' key={entityData.id}>
              <div className='text-fields-wrap'
                   onClick={() => {navigate(entityData.id)}}>
                {entityConfig.textFields && entityConfig.textFields.map((field) => (
                  <div className='text-field' key={field.key}>
                    {field.content(entityData)}
                  </div>
                ))}
              </div>
              <div className='actions-wrap'>
                {entityConfig.actions && entityConfig.actions.map((action) => {
                  const IconComponent = action.icon;
                  return (
                    <div key={action.key} className='icon-container'>
                      <IconComponent 
                        className={action.class}
                        onClick={
                          () => entityActions.delete.handler(userState.user.id, entityData)
                        }
                      />
                    </div>
                  )})}
              </div>
            </li>
          ))}
        </ul>
      </>
      )
    }
  }
  const content = createContent();
  return (
    <>
      {content}
    </>
  )
}