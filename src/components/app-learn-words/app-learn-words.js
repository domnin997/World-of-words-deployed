import './app-learn-words.css';
import { useState } from 'react';
import ListItem from '../app-list-item/app-list-item';
import AppSearchPanel from '../app-search-panel/app-search-panel';
import AppWordSlider from '../app-words-slider/app-words-slider';
import { wordsService } from '../../services/words.service';

function AppStudyField (props) {
    let [newWord, setNewWord ] = useState(''),
        [newTranslat, setNewTranslat] = useState(''),
        [newCategory, setnewCategory] = useState(''),
        [studyMode, setStudyMode] = useState(false);
    
    let toggleStudyMode = () => {
        if (studyMode === false) {
            setStudyMode (true);
        } else {
            setStudyMode (false);
        }
    }
    
    function addNewWord (event) {
        setNewWord(event.target.value);
    }

    let addNewTranlat = (event) => {
        setNewTranslat(event.target.value);
    }

    let addNewCategory = (event) => {
        setnewCategory(event.target.value);
    }
    
    let onAddWord = (event) => {
        event.preventDefault();
        props.addWord(newWord, newTranslat, newCategory);
        wordsService.addWord(1, {word: newWord, translation: newTranslat, category: newCategory});
            setNewWord('');
                setNewTranslat('');
                    setnewCategory('');
    }

    let {wordsBase, onDelete, onFavoriteClick, getSearchedWord, visibleWords, getSelectedCategory, getSelectedFavorite, onShowTranslation} = props;
    let elements = visibleWords.map((el) => {
        let {id, ...itemProps} = el;
        
        return (
            <ListItem key={id} {...itemProps}
                      onDelete={() => onDelete(id)} 
                      onFavoriteClick={() => onFavoriteClick(id)}/>
        )})

        let visibleBlock;
            if (wordsBase.length <= 0) {
                visibleBlock = <div className='empty_notification'>
                                    <div> Словарь пуст - добавьте новые слова</div>
                                </div>
            } else if (elements.length <= 0) {
                visibleBlock = <div className='empty_notification'>
                                    <div>Нет подходящих под критерии слов - измените фильтры</div>
                                </div>}
            else {visibleBlock = elements}


        if (!studyMode) {
            return (
            <div className='study_wrapper'>
                
                <div className='add_word_block'>
                    <form className='input_form' onSubmit={onAddWord}>
                        
                        <p className='add_word_description'>
                                Добавьте новое слово и его перевод
                        </p>
                        
                        <div className='input_fields_wrapper'>
                            
                                <input type='text'
                                       placeholder='Слово'
                                       name='newWord'
                                       className='input_word'
                                       value={newWord}
                                       onChange={addNewWord}
                                       required
                                />

                                <input type='text'
                                       placeholder='Перевод'
                                       name='newTranslation'
                                       className='input_translation'
                                       value={newTranslat}
                                       onChange={addNewTranlat}
                                       required
                                    />

                                <select onChange={addNewCategory}
                                        name='newCategory'
                                        value={newCategory}
                                        required>
                                    <option selected='selected'>Категория</option>
                                    <option>Работа</option>
                                    <option>Путешествия</option>
                                    <option>Общение</option>
                                </select>
                            
                        </div>
                        
                        <div>
                            <button> 
                                Добавить 
                            </button>
                        </div>

                    </form>
                </div>

                <div className='words'>
                    {visibleBlock}
                </div>
                
                <div className='study_mode_btn'>
                    <button onClick={toggleStudyMode}>
                        Перейти в режим заучивания
                    </button>
                </div>

                <AppSearchPanel
                    getSearchedWord={getSearchedWord}
                    getSelectedCategory={getSelectedCategory}
                    getSelectedFavorite={getSelectedFavorite}
                    disableMode={studyMode}
                    />  
            </div>
        )

        } else if (studyMode) {

            return (
                <div className='study_wrapper'>
                    <div className='add_word_block'>
                        <form className='input_form' onSubmit={onAddWord}>
                            
                            <p className='add_word_description'>
                                    Добавьте новое слово и его перевод
                            </p>

                            <div className='input_fields_wrapper'>
                                
                                <input type='text'
                                    placeholder='Слово'
                                    name='newWord'
                                    className='input_word'
                                    value={newWord}
                                    onChange={addNewWord}
                                    required
                                    disabled={studyMode}
                                />

                                <input type='text'
                                    placeholder='Перевод'
                                    name='newTranslation'
                                    className='input_translation'
                                    value={newTranslat}
                                    onChange={addNewTranlat}
                                    required
                                    disabled
                                />

                                <select onChange={addNewCategory}
                                        name='newCategory'
                                        value={newCategory}
                                        required
                                        disabled>
                                    <option selected='selected'>Категория</option>
                                    <option>Работа</option>
                                    <option>Путешествия</option>
                                    <option>Общение</option>
                                </select>
                                
                        </div>
                        
                        <div>
                            <button disabled> Добавить </button>
                        </div>

                        </form>
                    </div>

                <AppWordSlider visibleWords={visibleWords}
                           onShowTranslation={onShowTranslation}>
                </AppWordSlider>
                
                <div className='study_mode_btn'>
                    <button onClick={toggleStudyMode}>
                        Вернуться в режим редактирования
                    </button>
                </div>
                
                <AppSearchPanel
                    getSearchedWord={getSearchedWord}
                    getSelectedCategory={getSelectedCategory}
                    getSelectedFavorite={getSelectedFavorite}
                    disableMode={studyMode}
                />
                
        </div>
    ) 
    }
}

export default AppStudyField;