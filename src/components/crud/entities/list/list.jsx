import './list.css'
import LoadingSign from '../../../loader/loadingSign'
import { useGetWordsQuery } from '../../../../services/words.redux'
import {ReactComponent as DeleteIcon} from '../../../../assets/icons/delete-icon.svg'
import {ReactComponent as StarIcon} from '../../../../assets/icons/star-filled.svg'

export default function CrudEntitiesList ({entityConfig, entitiesQuery, entityFilters}) {
  const { data, isLoading } = useGetWordsQuery()

  function createContent () {
    if (isLoading) {
      return <LoadingSign />
    } else {
      return <ul>
        {data.map((word) => { return <>
          <li className='words-list-item'>
          <div>
            <p>{word.word}</p>
            {/* <p><NavLink to={`/study/${word.id}`}>Link</NavLink></p> */}
          </div>
          <div className='word-translation'>
            <p>{word.translation}</p>
          </div>
          <div className='star-container'>
            <StarIcon className={word.isPriority ? 'star-icon star-filled' : 'star-icon'}
                      fill='none'
                      stroke='black'/>
          </div>
          <div className='delete-container'>
            <DeleteIcon className='del-icon' fill='black'/>
          </div> 
          </li>
          </>
        })}
      </ul>
    }
  }

  const content = createContent();
  return (
    <>
      {content}
    </>
  )
}