import './list.css'
import LoadingSign from '../../../loader/loadingSign'
import { useGetWordsQuery } from '../../../../services/words.redux'

export default function CrudEntitiesList ({entityConfig, entitiesQuery, entityFilters}) {
  const { data, isLoading } = useGetWordsQuery()

  function createContent () {
    if (isLoading) {
      return <LoadingSign />
    } else {
      return (
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
            {/* <StarIcon className={entityData.isPriority ? 'star-icon star-filled' : 'star-icon'}
                      fill='none'
                      stroke='black'/> */}
          </li>
        ))}
      </ul>
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