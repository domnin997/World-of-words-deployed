import './app-search-panel.css';
import {Component} from 'react';

class SearchPanel extends Component {
    constructor (props) {
        super(props)
        this.state = {
            searchedWord: '',
            selectedCategory: '',
            selectedFavorite: ''
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

    onFavorite= (event) => {
        let favValue = event.target.value;
        let favorite;
            if (favValue === 'Только приоритетные') {
                favorite = true;
            } else if (favValue === 'Все слова') {
                favorite = false;
            }
        this.setState({
            selectedFavorite: favorite,
        })

        this.props.getSelectedFavorite(favorite);
    }

    render () {
        return (
            <div className='search_panel_block'>
                <div className='search_input_block'>
                    <div>Найдите слова с помощью поисковой строки</div>
                    <input type='text' 
                            placeholder='Введите иностранное слово для поиска'
                            value={this.state.searchedWord}
                            onChange={this.onSearch}
                            disabled={this.props.disableMode}
                    />
                </div>
                    
                <div className='search_input_block'>
                    <div>Уточните поиск с помощью указанных ниже категорий или используйте их отдельно</div>
                </div>

                <div className='filter_block'>
                    <div className='filter'>
                        <div>Категория</div>
                        <select onChange={this.onSelected}
                                disabled={this.props.disableMode}>
                            <option>Все слова</option>
                            <option>Работа</option>
                            <option>Общение</option>
                            <option>Учеба</option>
                        </select>
                    </div>
                    <div className='filter'>
                        <div>Время добавления</div>
                        <select disabled={true}>
                            <option>Все слова</option>
                            <option>Менее недели назад</option>
                            <option>От одной до двух недель</option>
                            <option>Более двух недель назад</option>
                        </select>
                    </div>
                    
                    <div className='filter'>
                        <div>Приоритет</div>
                        <select onChange={this.onFavorite}
                                disabled={this.props.disableMode}>
                            <option>Все слова</option>
                            <option>Только приоритетные</option>
                        </select>
                    </div>
                </div>   
            </div>
        )
    }
}

export default SearchPanel;