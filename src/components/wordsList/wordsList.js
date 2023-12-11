import './wordsList.css';
import WordsListItem from '../app-list-item/wordsListItem.js';
import { useContext } from 'react';
import { WordsContext } from '../../store/dictionary.store.js';

function WordsList (props) {
  const {wordsState} = useContext(WordsContext);

  function createList (words) {
    return words.map(element => {
      return <WordsListItem key={element.id} wordData={element}/>
    });
  }
 
  const items = wordsState.length ? createList(props.words) : null;

  return (
    <div className='words-list'>
      {items}
    </div>
  );
}

export default WordsList;