import './app-search-panel.css';
import { useState } from 'react';

function AppSearchPanel (props) {
    const {getSearchedWord, getSelectedCategory, getSelectedFavorite, disableMode} = props;
    const [searchData, setSearchData] = useState({
        searchedWord: '',
        selectedCategory: '',
        selectedFavorite: ''
    })
    
    const onSearch = (event) => {
        let word = event.target.value;
            setSearchData({
                ...searchData,
                searchedWord: word
            })    
            getSearchedWord(word);
    }

    const onSelected = (event) => {
        let selected = event.target.value;
            setSearchData({
                ...searchData,
                selectedCategory: selected
            })
            getSelectedCategory(selected);
    }

    const onFavorite = (event) => {
        let favValue = event.target.value;
        let favorite;

            if (favValue === 'Только приоритетные') {
                favorite = true;
            } else if (favValue === 'Все слова') {
                favorite = false;
            }
            
            setSearchData({
                ...searchData,
                selectedFavorite: favorite
            })
            
            getSelectedFavorite(favorite);
    }

    return (
        <div className='search_panel_block'>
            
            <div className='search_input_block'>
                <div>Найдите слова с помощью поисковой строки</div>
                <input type='text' 
                        placeholder='Введите иностранное слово для поиска'
                        value={searchData.searchedWord}
                        onChange={onSearch}
                        disabled={disableMode}
                />
            </div>
                
            <div className='search_input_block'>
                <div>Уточните поиск с помощью указанных ниже категорий или используйте их отдельно</div>
            </div>

            <div className='filter_block'>
                <div className='filter'>
                    <div>Категория</div>
                    <select onChange={onSelected}
                            disabled={disableMode}>
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
                    <select onChange={onFavorite}
                            disabled={disableMode}>
                        <option>Все слова</option>
                        <option>Только приоритетные</option>
                    </select>
                </div>

            </div>   
        </div>
    )

}

export default AppSearchPanel;