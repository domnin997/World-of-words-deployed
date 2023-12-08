import './dictionaryMenu.css';
import {WORDS_ACTIONS, WordsContext} from '../../store/dictionary.store';
import { useContext, useState } from 'react';
import { wordsService } from '../../services/words.service';
import { AppContext } from '../../store/store';
import getRightForm from '../../utils/utils';
import WordModal from '../wordModal/wordModal';
import StandardButton from '../standardButton/standardButton';

function DictionaryMenu () {

  const {wordsState, wordsDispatch} = useContext(WordsContext);
  const {userState} = useContext(AppContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <section className='dictionary-menu'>
      <WordModal isOpen={isModalOpen} isEditMode={false} onClose={onModalClose}/>
      <div className='dictionary-menu__btns-wrap'>
        <StandardButton btnText={'Добавить слово'} clickHandler={onModalOpen}/>
        <StandardButton btnText={'Очистить словарь'} clickHandler={() => {wordsDispatch({type: WORDS_ACTIONS.DELETE_ALL}); wordsService.clearDB(userState.user.id)}}/>
      </div>
      <div className='dictionary-menu__stat-wrap'>
        <div>
          <p>В вашем словаре: {wordsState.length} {getRightForm(wordsState.length, ['слово', 'слова', 'слов'])}</p>
        </div>
      </div>
    </section>
  )
}

export default DictionaryMenu;