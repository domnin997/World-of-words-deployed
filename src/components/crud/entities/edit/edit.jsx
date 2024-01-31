import { PageLayoutContext } from '../../../../context/layoutContext'
import { createPortal } from 'react-dom'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import './edit.css'

export default function EditEntity ({
  entityConfig,
  entityID,
  entitySave
}) {
  
  const navigate = useNavigate();

  const {
    headerLeftElement,
    headerRightElement
  } = useContext(PageLayoutContext);
  
  async function handleSubmit () {
    await entitySave(values)
    navigate('..')
  }

  const [values, setValues] = useState(
    entityConfig.fields.reduce((acc, cur) => {
      if (cur.type === 'dateinput') {
        acc[cur.key] = null
      } else {
        acc[cur.key] = ''
      }
      return acc
    }, {})
  )

  function handleChange (key, value) {
    setValues((values) => ({
      ...values,
      [key]: value,
    }))
    console.log(values)
  }

  return (
    <>
      {headerLeftElement && createPortal(
        <h2>
          {entityID ? entityConfig.titles.edit : entityConfig.titles.add}
        </h2>,
        headerLeftElement)
      }
      {headerRightElement && createPortal(
        <>
          <button onClick={() => handleSubmit()}>
            Сохранить
          </button>
          <button onClick={() => navigate('..')}>
            Отменить
          </button>
        </>,
        headerRightElement)
      }
      <form className='pg-edit-form' onSubmit={() => handleSubmit()}>
        {entityConfig.fields.map((field) => {
          if (field.type === 'textinput') {
            return (
              <div className='pg-input-wrapper'>
                <p className='pg-input-up-label'>
                  {field.label}
                </p>
                <input
                  className='pg-text-input'
                  key={field.key}
                  type='text'
                  placeholder={field.placeholder}
                  onChange={(event) => handleChange(field.key, event.currentTarget.value)}
                />
              </div>
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