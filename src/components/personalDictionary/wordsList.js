import './wordsList.css';
import WordsListItem from '../app-list-item/wordsListItem.js';
import { useContext } from 'react';
import { wordsService } from '../../services/words.service';
import { WordsContext } from '../../store/dictionary.store.js';

function WordsList () {
  const {wordsState} = useContext(WordsContext);

  function createList (words) {
    console.log('На формирование передано:', words);
    return words.map(element => {
      return <WordsListItem key={element.id} wordData={element}/>
    });
  }
 
  const items = wordsState.length ? createList(wordsState) : null;
  
  return (
    <div className='words-list'>
      <button onClick={() => {wordsService.clearDB(1)}}>Delete all for TEST</button>
      {items}
    </div>
  );
}

export default WordsList;