import './app-search-panel.css';
import {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class SearchPanel extends Component {
    constructor (props) {
        super(props)
        this.state = {
            searchedWord: '',
            selectedCategory: '',
        }
    }

    onSearch = (event) => {
        let word = event.target.value;
            this.setState({searchedWord: word})
            this.props.getSearchedWord(word)
    }

    onSelected = (event) => {
        let selected = event.target.value;
            this.setState({selectedCategory: selected})
            this.props.getSelectedCategory(selected)
    }

    render () {
        return (
            
                <Container className='search_panel_block'>
                    
                    <Row className='search_input_block'>
                        <Col>
                            <div>Найдите слова с помощью поисковой строки</div>
                            <input type='text' placeholder='Введите иностранное слово для поиска' value={this.state.searchedWord}onChange={this.onSearch}/>
                        </Col>
                    </Row>
                    
                    <Row className='search_input_block'>
                        <Col>Уточните поиск с помощью указанных ниже категорий или используйте их отдельно</Col>
                    </Row>

                    <Row className='filter_block'>
                        <Col className='filter'>
                            <div>Категория</div>
                            <select onChange={this.onSelected}>
                                <option>Все слова</option>
                                <option>Работа</option>
                                <option>Общение</option>
                                <option>Учеба</option>
                            </select>
                        </Col>
                        <Col className='filter'>
                            <div>Время добавления</div>
                            <select>
                                <option>Все слова</option>
                                <option>Менее недели назад</option>
                                <option>От одной до двух недель</option>
                                <option>Более двух недель назад</option>
                            </select>
                        </Col>
                        
                        <Col className='filter'>
                            <div>Приоритет</div>
                            <select>
                                <option>Все слова</option>
                                <option>Только приоритетные</option>
                            </select>
                        </Col>
                    </Row>
                    
                </Container>
            
        )
    }
}

export default SearchPanel;