import './app-learn-words.css';
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ListItem from '../app-list-item/app-list-item';
import SearchPanel from '../app-search-panel/app-search-panel';
import AppSlider from '../app-words-slider/app-words-slider';

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
                    
                    <Container className='add_word_block'>
                        <form className='input_form' onSubmit={onAddWord}>
                            <Row className='justify-content-center pt-4 add_word_description'>
                                    Добавьте новое слово и его перевод
                            </Row>
                                <Row className='justify-content-center mt-4'>
                                    <Col xs sm md lg={3}>
                                        <input type='text'
                                            placeholder='Слово'
                                            name='newWord'
                                            className='input_word'
                                            value={newWord}
                                            onChange={addNewWord}
                                            required
                                        />
                                    </Col>
    
                                    <Col xs sm md lg={3}>
                                        <input type='text'
                                            placeholder='Перевод'
                                            name='newTranslation'
                                            className='input_translation'
                                            value={newTranslat}
                                            onChange={addNewTranlat}
                                            required
                                        />
                                    </Col>
                                    <Col xs sm md lg={3}>
                                        <select onChange={addNewCategory}
                                                name='newCategory'
                                                value={newCategory}
                                                required>
                                            <option selected='selected'>Категория</option>
                                            <option>Работа</option>
                                            <option>Путешествия</option>
                                            <option>Общение</option>
                                        </select>
                                    </Col>
                            </Row>
                            <Row className='justify-content-center mt-4'>
                                    <Col xs sm md lg={6}>
                                        <button> Добавить </button>
                                    </Col>
                            </Row>
    
                        </form>
                    </Container>

                    <Container className='words'>
                        {visibleBlock}
                    </Container>
                    
                    <div className='learning_mode_btn'>
                        <button onClick={toggleStudyMode}>
                            Перейти в режим заучивания
                        </button>
                    </div>
    
                    

                    <SearchPanel
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
                
                <Container className='add_word_block'>
                    <form className='input_form' onSubmit={onAddWord}>
                        <Row className='justify-content-center pt-4 add_word_description'>
                                Добавьте новое слово и его перевод
                        </Row>
                            <Row className='justify-content-center mt-4'>
                                <Col xs sm md lg={3}>
                                    <input type='text'
                                        placeholder='Слово'
                                        name='newWord'
                                        className='input_word'
                                        value={newWord}
                                        onChange={addNewWord}
                                        required
                                        disabled={studyMode}
                                    />
                                </Col>

                                <Col xs sm md lg={3}>
                                    <input type='text'
                                        placeholder='Перевод'
                                        name='newTranslation'
                                        className='input_translation'
                                        value={newTranslat}
                                        onChange={addNewTranlat}
                                        required
                                        disabled
                                    />
                                </Col>
                                <Col xs sm md lg={3}>
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
                                </Col>
                        </Row>
                        <Row className='justify-content-center mt-4'>
                                <Col xs sm md lg={6}>
                                    <button disabled> Добавить </button>
                                </Col>
                        </Row>
                    </form>
                </Container>

                <AppSlider visibleWords={visibleWords}
                           onShowTranslation={onShowTranslation}>
                </AppSlider>
                
                <div className='learning_mode_btn'>
                    <button onClick={toggleStudyMode}>
                        Вернуться в режим редактирования
                    </button>
                </div>
                
                
                
                <SearchPanel
                    getSearchedWord={getSearchedWord}
                    getSelectedCategory={getSelectedCategory}
                    getSelectedFavorite={getSelectedFavorite}
                    disableMode={studyMode}/>
                
        </div>
            ) 
        }

    return (
        <div> ЪуЪ! </div>
    )

}

export default AppStudyField;