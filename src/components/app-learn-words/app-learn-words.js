import './app-learn-words.css';
import {Component} from 'react';
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
        let {wordsBase, onDelete, getSearchedWord, visibleWords} = this.props;
        console.log(visibleWords)
        let elements = visibleWords.map((item) => {
            let {id, ...itemProps} = item;
            return (
                <ListItem key={id} {...itemProps} onDelete={() => onDelete(id)}/>
            )})
        return (
            <div className='study_field_wrapper'>
                <SearchPanel getSearchedWord={getSearchedWord}></SearchPanel>
            <div className='words_list_wrapper'>
                {elements}
            </div>
            <div className='add_word_block'>
                <div>
                    Добавьте новое слово и его перевод:
                </div>
            
            <div className='add_form_container'>
                <form className='input_form' onSubmit={this.onAdd}>
    
                    <input type='text'
                           placeholder='Слово'
                           name='newWord'
                           className='input_word'
                           value={this.state.newWord}
                           onChange={this.addNew}
                           required
                    />
    
                    <input type='text'
                           placeholder='Перевод'
                           name='newTranslation'
                           className='input_translation'
                           value={this.state.newTranslation}
                           onChange={this.addNew}
                           required
                    />
    
                    <select onChange={this.addNew}
                            name='newCategory'
                            value={this.state.newCategory}
                            required>
                        <option selected='selected'>Работа</option>
                        <option>Путешествия</option>
                        <option>Общение</option>
                    </select>
    
                    <button> Добавить </button>
    
                </form>
            </div>    
            </div>
            </div> 
            ) 
            
    }    
}
 
export default StudyField;