import './wordsList.css';
import WordsListItem from '../wordsListItem/wordsListItem.js';
import { useContext } from 'react';
import { WordsContext } from '../../store/dictionary.store.js';

function WordsList (props) {
  const {wordsState} = useContext(WordsContext);

  function createList (words) {
    return words.map(element => {
      return <WordsListItem key={element.id} wordData={element}/>
    });
  }
 
  const items = wordsState.length ? createList(props.words) : <li>Список пуст</li>;

  return (
    <ul className='words-list'>
      {items}
    </ul>
  );
}

export default WordsList;