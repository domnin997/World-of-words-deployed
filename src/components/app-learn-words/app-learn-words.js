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
        let {wordsBase, onDelete, getSearchedWord, visibleWords, getSelectedCategory} = this.props;
        let elements = visibleWords.map((item) => {
            let {id, ...itemProps} = item;
            return (
                <ListItem key={id} {...itemProps} onDelete={() => onDelete(id)}/>
            )})
        
            let visibleBlock;
                if (wordsBase.length <= 0) {
                    visibleBlock = <div className='empty_notification'>Словарь пуст - добавьте новые слова</div>
                } else if (elements.length <= 0) {visibleBlock = <div className='empty_notification'>Нет подходящих под критерии слов - измените фильтры</div>}
                else {visibleBlock = elements}

        return (
            <div className='study_wrapper'>
                
                <SearchPanel
                    getSearchedWord={getSearchedWord}
                    getSelectedCategory={getSelectedCategory}/>
                
                
                <Container className='words'>
                    {visibleBlock}
                </Container>
                
            
                <div className='add_word_block'>
                 
                <form className='input_form' onSubmit={this.onAdd}>
                    <Container>
                        <Row>
                        Добавьте новое слово и его перевод:
                        </Row>
                        <Row>
                    <Col lg={3}>
                    <input type='text'
                           placeholder='Слово'
                           name='newWord'
                           className='input_word'
                           value={this.state.newWord}
                           onChange={this.addNew}
                           required
                    />
    </Col>
    <Col lg={3}>
                    <input type='text'
                           placeholder='Перевод'
                           name='newTranslation'
                           className='input_translation'
                           value={this.state.newTranslation}
                           onChange={this.addNew}
                           required
                    />
   </Col> <Col lg={3}>
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
                    <Col lg={3}><button> Добавить </button></Col>
                    </Row>
                   </Container>
                </form>
                
            </div>
            
            </div>
           
            ) 
            
    }    
}
 
export default StudyField;