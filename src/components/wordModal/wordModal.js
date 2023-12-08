import './wordModal.css';
import {WordsContext, WORDS_ACTIONS} from '../../store/dictionary.store';
import { wordsService } from '../../services/words.service';
import { AppContext } from '../../store/store';
import {createPortal} from 'react-dom';
import StandardButton from '../standardButton/standardButton';
import { useState, useContext } from 'react';

function WordModal (props) {

  const {isOpen, isEditMode, onClose} = props;
  const headerText = isEditMode ? 'Редактирование слова' : 'Добавление слова';
  const btnText = isEditMode ? 'Сохранить изменения' : 'Добавить слово';

  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [notes, setNotes] = useState('');

  const {wordsDispatch} = useContext(WordsContext);
  const {userState} = useContext(AppContext);

  if (!isOpen) return null;

  const onSubmit = (e) => {
    e.preventDefault();
    const newWord = {
        word,
        translation,
        notes,
        id: crypto.randomUUID(),
        dateOfCreation: Date.now(),
        isPrioritized: false,
    }
    wordsService.addWord(userState.user.id, newWord);
    wordsDispatch({type: WORDS_ACTIONS.ADD, newWord});
  } 

  return  (
   <>
   { createPortal (
    <div className='modal-overlay'>
      <div className='word-modal'>
        <div className='word-modal__header'>
          <h2 className='word-modal__h2'>{headerText}</h2>
          <div onClick={onClose}
               className='word-modal__close-cont'>
            <p></p>
          </div>
        </div>
        <div className='word-modal__form-container'>
          <form className='word-modal__form'
                onSubmit={onSubmit}>
            {/* <div></div> */}
            <input className='word-modal__input'
                   placeholder='Слово'
                   value={word}
                   onInput={(e) => {setWord(e.target.value)}}
                   required/>
            {/* <div></div> */}
            <input className='word-modal__input'
                   placeholder='Перевод'
                   value={translation}
                   onInput={(e) => {setTranslation(e.target.value)}}
                   required/>
            {/* <div></div> */}
            <input className='word-modal__input'
                   placeholder='Заметка'
                   value={notes}
                   onInput={(e) => {setNotes(e.target.value)}}/>
            <StandardButton btnText={btnText}  btnType={'submit'}/>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )}
</>
)
}

export default WordModal;