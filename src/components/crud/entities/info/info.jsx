import './info.css'
import { PageLayoutContext } from '../../../../context/layoutContext'
import { useContext } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router'
import LoadingSign from '../../../loader/loadingSign'
import StandardButton from '../../../standardButton/standardButton'

export default function Info ({
  entityConfig,
  entityQuery,
  entityId,
  userId
}) {
  
  const { 
    data,
    isLoading
  } = entityQuery({userId,entityId})
  const {
    headerLeftElement,
    headerRightElement,
  } = useContext(PageLayoutContext)
  const navigate = useNavigate()
  return (
    <>
      {isLoading && <LoadingSign />}
      {!isLoading && 
        <>
        {headerLeftElement && createPortal(
          <h2>
            {entityConfig.titles.info}
          </h2>,
        headerLeftElement
        )}
        {entityConfig.add && headerRightElement && createPortal(
          <StandardButton 
            btnText={'Редактировать'}
            clickHandler={() => navigate('edit')}/>,
        headerRightElement
        )}
          <div className='pg-entity-info-wrapper'>
            {entityConfig.fields && entityConfig.fields.map((field) => {
              return (
                <div key={field.key} className='pg-entity-info-field'>
                  <p className='pg-entity-info-field__label'>
                    {field.label}:
                  </p>
                  <p className='pg-entity-info-field__text' key={field.key}>
                    {(field.key === 'createdAt' || field.key === 'deadline') && 
                    `${new Date (data[field.key])}`}
                    {field.key !== 'createdAt' && field.key !== 'deadline' && 
                    data[field.key]}
                  </p>
                </div>
              )
            })}
          </div>
        </>
      }
    </>
  )
}