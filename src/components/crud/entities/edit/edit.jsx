import { PageLayoutContext } from '../../../../context/layoutContext'
import { createPortal } from 'react-dom'
import { useContext } from 'react'
import { useNavigate } from 'react-router'

export default function EditEntity ({
  entityConfig,
  entityID,
  entitySave
}) {
  
  const navigate = useNavigate();

  const {
    headerLeftElement,
  } = useContext(PageLayoutContext);
  
  async function handleSubmit () {
    await entitySave()
    navigate('..')
  }

  return (
    <>
      {headerLeftElement && createPortal(
        <h2>
          {entityID ? entityConfig.titles.edit : entityConfig.titles.add}
        </h2>,
        headerLeftElement)
      }
      <form onSubmit={() => handleSubmit()}>
        {entityConfig.fields.map((field) => {
          if (field.type === 'textinput') {
            return (
              <input
                key={field.key}
                type='text'
                placeholder={field.placeholder}
                onChange={() => {console.log('Text Changed')}}
              />
            )
          } else if (field.type === 'dateinput') {
            return (
              <input
                type='date'
                placeholder={field.placeholder}
                onChange={() => {console.log('Date Changed')}}
              />
            )
          }
        })}
      </form>
    </>
  )
}