import './wordsList.css';
import WordsListItem from '../app-list-item/wordsListItem.js';
import { useState, useEffect } from 'react';
import { wordsService } from '../../services/words.service';

function WordsList () {

  const [words, setWords] = useState([]);

  useEffect(() => {

    async function requestWords () {
      const newWords = await wordsService.getWords(1);
      if (newWords) {
        setWords(newWords);
        console.log(words);
      } else {
        console.log('Ошибка запроса')
      }
    }

    requestWords();
  }, []);
  
  function createList (words) {
    return words.map(element => {
      console.log(element, element.word, element.translation);
      return <WordsListItem key={element.id} wordData={element}/>
    });
  }
  
  if (words.length) {
    const items = createList(words);
    console.log(items);
  }

  const items = words.length ? createList(words) : null;
  
  
  // Компонент направляет запрос в базу по конкретному пользователю
  // Полученный результат используется для создания элементов - слов

  // Каждый компонент-слово получит уже готовую информацию по этому слову

  return (
    <div className='words-list'>
      <button onClick={() => {wordsService.clearDB(1)}}>Delete all for TEST</button>
      {items}
    </div>
  );
}

export default WordsList;