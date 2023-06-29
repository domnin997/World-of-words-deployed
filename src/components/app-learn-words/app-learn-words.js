import './app-learn-words.css';
import {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ListItem from '../app-list-item/app-list-item';
import SearchPanel from '../app-search-panel/app-search-panel';

class StudyField extends Component {
    constructor ({props}) {
        super(props)
        this.state = {
            newWord: '',
            newTranslation: '',
            newCategory: ''
        }
    }

    addNew = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    onAdd = (e) => {
        e.preventDefault();
        this.props.addWord(this.state.newWord, this.state.newTranslation, this.state.newCategory);
        this.setState({
            newWord: '',
            newTranslation: '',
            newCategory: ''
        })
    }
    
    render () {
        let {wordsBase, onDelete, onFavoriteClick, getSearchedWord, visibleWords, getSelectedCategory} = this.props;
        let elements = visibleWords.map((item) => {
            let {id, ...itemProps} = item;
            return (
                <ListItem key={id} {...itemProps}
                          onDelete={() => onDelete(id)} 
                          onFavoriteClick={() => onFavoriteClick(id)}/>
            )})
        
            let visibleBlock;
                if (wordsBase.length <= 0) {
                    visibleBlock = <div className='empty_notification'><div>Словарь пуст - добавьте новые слова</div></div>
                } else if (elements.length <= 0) {visibleBlock = <div className='empty_notification'><div>Нет подходящих под критерии слов - измените фильтры</div></div>}
                else {visibleBlock = elements}

            
        console.log(visibleWords)
        return (
            <div className='study_wrapper'>
                
                <SearchPanel
                    getSearchedWord={getSearchedWord}
                    getSelectedCategory={getSelectedCategory}/>
                
                
                <Container className='words'>
                    {visibleBlock}
                </Container>
                
                <Container className='add_word_block'>
                    <form className='input_form' onSubmit={this.onAdd}>
                        <Row className='justify-content-center pt-4 add_word_description'>
                                Добавьте новое слово и его перевод
                        </Row>
                            <Row className='justify-content-center mt-4'>
                                <Col xs sm md lg={3}>
                                    <input type='text'
                                        placeholder='Слово'
                                        name='newWord'
                                        className='input_word'
                                        value={this.state.newWord}
                                        onChange={this.addNew}
                                        required
                                    />
                                </Col>

                                <Col xs sm md lg={3}>
                                    <input type='text'
                                        placeholder='Перевод'
                                        name='newTranslation'
                                        className='input_translation'
                                        value={this.state.newTranslation}
                                        onChange={this.addNew}
                                        required
                                    />
                                </Col>
                                <Col xs sm md lg={3}>
                                    <select onChange={this.addNew}
                                            name='newCategory'
                                            value={this.state.newCategory}
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
        </div>
            ) 
            
    }    
}
 
export default StudyField;