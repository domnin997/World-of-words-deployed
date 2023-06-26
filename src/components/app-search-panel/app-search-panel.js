import './app-search-panel.css';
import {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class SearchPanel extends Component {
    constructor (props) {
        super(props)
        this.state = {
            searchedWord: '',
        }
    }

    onSearch = (event) => {
        let word = event.target.value;
            this.setState({searchedWord: word})
            this.props.getSearchedWord(word)
    }

    render () {
        return (
            <div className='search_panel_wrapper'>
                <Container>
                    <Row className='search_input_block'>
                        <Col className='search_panel_block' lg={12}>
                            <div>Найти слово по критериям с помощью фильтров и поиска</div>
                            <input type='text' placeholder='Введите иностранное слово для поиска' value={this.state.searchedWord}onChange={this.onSearch}/>
                        </Col>
                    </Row>
                    <Row className='filter_name_row'>
                        <Col className='search_filter'>
                            Категория
                        </Col>
                        <Col className='search_filter'>
                            Время добавления
                        </Col>
                        <Col className='search_filter'>
                            Приоритет
                        </Col>
                    </Row>
                    <Row className='search_filters_block'>
                        <Col className='search_filter'>
                            <select>
                                <option>Все слова</option>
                                <option>Работа</option>
                                <option>Общение</option>
                                <option>Учеба</option>
                            </select>
                        </Col>
                        <Col className='search_filter'>
                        <select>
                                <option>Все слова</option>
                                <option>Менее недели назад</option>
                                <option>От одной до двух недель</option>
                                <option>Более двух недель назад</option>
                        </select>
                        </Col>
                        <Col className='search_filter'>
                        <select>
                                <option>Все слова</option>
                                <option>Только приоритетные</option>
                        </select>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SearchPanel;