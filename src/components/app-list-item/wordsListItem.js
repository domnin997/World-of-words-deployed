import './app-list-item.css';
import { wordsService } from '../../services/words.service';
import deleteIcon from '../../assets/icons/delete-icon.svg';
import emptyStar from './empty_star.png';
import yellowStar from './yellow_star.png';

function WordsListItem (props) {
   
  let starIcon = emptyStar,
      classList = 'sec_nested';

  const {word, translation, id} = props.wordData;
  
  function onDelete () {
    wordsService.deleteWord(1, id);
  }

  return ( 
    <div className='words_list_block'>
      <div className='foreign_word_container'>
          <div className={classList}>{word}</div>
      </div>

      <div className='translation_container'>
        <div className='nested_element'> 
          <div className='sec_nested'>{translation}</div>
        </div>
      </div>

      <div className='star_button button_container'>
        <div className='img_container'>
          <img src={starIcon}
               width='20px' 
               height='20px'
               alt='star_icon'>
          </img>
        </div>
      </div>
      <div className='delete_button button_container'>
        <div className='img_container'>
          <img src={deleteIcon}
               width='20px' 
               height='20px'
               alt='delete_icon'
               onClick={onDelete}>
          </img>
        </div>
      </div> 
    </div>
  );
}

export default WordsListItem;