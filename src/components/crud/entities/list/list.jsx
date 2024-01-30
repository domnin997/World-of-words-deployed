import './list.css'
import LoadingSign from '../../../loader/loadingSign'
import { PageLayoutContext } from '../../../../context/layoutContext'
import { useContext } from 'react'
import { createPortal } from 'react-dom'

export default function CrudEntitiesList ({
  entityConfig, entitiesQuery, entityFilters
}) {
  const {
    data,
    isLoading
  } = entitiesQuery()

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
        <ul className='entities-wrap'>
          {data.map((entityData) => (
            <li className='words-list-item' key={entityData.id}>
              <div className='text-fields-wrap'>
                {entityConfig.textFields && entityConfig.textFields.map((field) => (
                  <div key={field.key}>
                    {field.content(entityData)}
                  </div>
                ))}
              </div>
              <div className='actions-wrap'>
                {entityConfig.actions && entityConfig.actions.map((action) => {
                  const IconComponent = action.icon;
                  return (
                    <div key={action.key} className='icon-container'>
                      <IconComponent className={action.class}/>
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