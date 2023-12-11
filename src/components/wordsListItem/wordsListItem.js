import './wordsListItem.css';
import { wordsService } from '../../services/words.service';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../store/store';
import {ReactComponent as DeleteIcon} from '../../assets/icons/delete-icon.svg';
import {ReactComponent as StarIcon} from '../../assets/icons/star-filled.svg';
import { WordsContext, WORDS_ACTIONS } from '../../store/dictionary.store';

function WordsListItem (props) {
  
  const {userState} = useContext(AppContext);
  const {wordsDispatch} = useContext(WordsContext);
  const [isPriority, setIsPriority] = useState(false);

  const {word, translation, id, isPrioritized} = props.wordData;
  
  useEffect(() => {
    if (!isPrioritized) return
    togglePriority();
  }, []);

  const togglePriority = () => {
    setIsPriority(!isPriority);
    const newWord = props.wordData;
    
    newWord.isPrioritized = !props.wordData.isPrioritized;
    console.log(newWord)
    wordsService.amendWord(userState.user.id, newWord);
  }

  function onDelete () {
    wordsService.deleteWord(userState.user.id, id);
    wordsDispatch({type: WORDS_ACTIONS.DELETE, id});
  }

  const wordClasses = isPriority ? 'foreign-word prioritized-word' : 'foreign-word';

  return ( 
    <li className='words-list-item'>
      <div className={wordClasses}>
        <p>{word}</p>
      </div>
      <div className='word-translation'>
        <p>{translation}</p>
      </div>
      <div className='star-container'>
        <StarIcon className={isPriority ? 'star-icon star-filled' : 'star-icon'} 
                  onClick={togglePriority}
                  fill='none'
                  stroke='black'/>
      </div>
      <div className='delete-container'>
        <DeleteIcon className='del-icon' fill='black' onClick={onDelete}/>
      </div> 
    </li>
  );
}

export default WordsListItem;