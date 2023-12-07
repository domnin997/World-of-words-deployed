import './dictionaryMenu.css';
import {WORDS_ACTIONS, WordsContext} from '../../store/dictionary.store';
import { useContext, useState } from 'react';
import { wordsService } from '../../services/words.service';
import { AppContext } from '../../store/store';

function DictionaryMenu () {

  const {wordsDispatch} = useContext(WordsContext);
  const {userState} = useContext(AppContext);
  
  const [word, setWord] = useState('');

  function onAdd (e) {
    e.preventDefault();

    const newWord = {
      word: word,
      translation: '',
      id: crypto.randomUUID(),
      dateOfCreation: Date.now(),
      isPrioritized: false,
      notes: '',
    }
    
    wordsService.addWord(userState.user.id, newWord);
    wordsDispatch({type: WORDS_ACTIONS.ADD, newWord});
  }

  return (
    <section className='dictionary-menu'>
      <div className='btn-wrap'>
        <form onSubmit={onAdd}>
          <input type='text' placeholder='Слово'
                onInput={(e) => {setWord(e.target.value)}}/>
          <button className='dictionary-menu__btn' type='submit'>Добавить</button>
        </form>

        <button className='dictionary-menu__btn add-word-btn'>
          Добавить слово
        </button>
      </div>
      <div className='btn-wrap'>
        <button onClick={() => {wordsDispatch({type: WORDS_ACTIONS.DELETE_ALL}); wordsService.clearDB(userState.user.id)}}
                className='dictionary-menu__btn delete-word-btn'>
          Удалить все (тест)
        </button>
      </div>
    </section>
  )
}

export default DictionaryMenu;