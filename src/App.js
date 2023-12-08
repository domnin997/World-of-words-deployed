import './App.css';
import {useState} from 'react';
import {Outlet} from 'react-router-dom';
import AppHeader from './components/header/header';
import AppStudyField from './components/app-learn-words/app-learn-words';
import AppFooter from './components/app-footer/app-footer';


function App (props) {
  
  const [aboutBtn, setAboutBtn] = useState(true);
  const [studyBtn, setStudyBtn] = useState(false);

  const [wordsBase, setWordsBase] = useState([
    {
      word: 'Smile',
      translation: 'Улыбаться, улыбка',
      category: 'Общение',
      favorite: false,
      translationSlide: false,
      id: 1
    }, {
      word: 'Accounting',
      translation: 'Бухгалтерия',
      category: 'Работа',
      favorite: false,
      translationSlide: false,
      id: 2
    },
  ]);

  const [searchDetails, setSearchDetails] = useState({
    searchWord: '',
    selectedCategory: 'Все слова',
    selectedFavorite: false
  });

  const headerBtnClick = (event) => {
    let btn = event.target.getAttribute('name')
      if (btn === 'about_btn') {
          setAboutBtn(true);
          setStudyBtn(false);
        }
      else if (btn === 'learn_btn') {
          setAboutBtn(false);
          setStudyBtn(true);
      }
  }

  const onShowTranslation = (id) => {
    let newArr = wordsBase.map((element) => {
      if (element.id === id && element.translationSlide === false) {
        return {...element, translationSlide: true}
        
      } else if (element.id === id && element.translationSlide === true) {
        return {...element, translationSlide: false}
      } else {return element}
    })

    setWordsBase((wordsBase) => {
      return newArr;
    })
    
}
  const addWord = (word, translation, category) => {
    let id;
    if (wordsBase.length > 0) {id = wordsBase[wordsBase.length - 1].id + 1} else {id = 1};
    let favorite = false,
        translationSlide = false;
    let newArr = [...wordsBase, {
      word,
      translation,
      category,
      favorite,
      translationSlide,
      id
    }]
    setWordsBase(newArr);
  }

  const onDel = (id) => {
    setWordsBase((wordsBase) => {
      let newArr = wordsBase.filter((elem) => elem.id !== id);
      return newArr;
    })
    
}

const onFavoriteClick = (id) => {
  setWordsBase((wordsBase) => {
    let newArr = wordsBase.map((element) => {
      if (element.id === id && element.favorite === false) {
        return {...element, favorite: true}
      } 
      else if (element.id === id && element.favorite === true) {
        return {...element, favorite: false}}
      else {return {...element}}
    })
    return newArr;
  })
}


const searchWord = (items, term, category, favorite) => {
  if (term.length === 0) {
    
    if (category === 'Все слова' && !favorite) {
        return items;
    } 
    else if (category === 'Все слова' && favorite) {
        items.filter((item) => item.favorite);
      }
    else if (category !== 'Все слова' && !favorite) {
        items.filter((item) => item.category === category);
    }
    else if (category !== 'Все слова' && favorite) {
      items.filter((item) => item.category === category && item.favorite === favorite);
    }
  } 

  return items.filter((item) => {
    let newTerm = term.toLowerCase();
      
    if (category ==='Все слова' && !favorite) {
          return item.word.toLowerCase().indexOf(newTerm) > -1}

    else if (category !=='Все слова' && !favorite) {
          return item.word.toLowerCase().indexOf(newTerm) > -1 && item.category===category}

    else if (category !== 'Все слова' && favorite) {
      return item.word.toLowerCase().indexOf(newTerm) > -1 && item.category === category && item.favorite === favorite
    }
    
    else if (category === 'Все слова' && favorite) {
        return item.word.toLowerCase().indexOf(newTerm) > -1 && item.favorite === favorite
    }

  })
  
}

const getSearchedWord = (word) => {
  setSearchDetails({
    ...searchDetails,
    searchWord: word,
  })
}

const getSelectedCategory = (category) => {
  setSearchDetails({
    ...searchDetails,
    selectedCategory: category,
  })
}

const getSelectedFavorite = (favorite) => {
  setSearchDetails({
    ...searchDetails,
    selectedFavorite: favorite,
  })
}

const visibleWords = searchWord(wordsBase, searchDetails.searchWord, searchDetails.selectedCategory, searchDetails.selectedFavorite);

if (aboutBtn) {
  return (
    
    <div className="App">
      <div className='page_wrapper'> 
        <AppHeader headerBtnClick={headerBtnClick}
                   aboutBtn={aboutBtn}
                   learnBtn={studyBtn}/> 
        <Outlet/>
        <AppFooter/>
    </div>
  </div>
  )
} else if (studyBtn) {
  return (
    <div className="App">
      <div className='page_wrapper'>
      
      <AppHeader headerBtnClick={headerBtnClick}
                 aboutBtn={aboutBtn}
                 learnBtn={studyBtn}/>

      <AppStudyField wordsBase={wordsBase}
                  addWord={addWord}
                  onDelete={onDel}
                  onFavoriteClick={onFavoriteClick}
                  getSearchedWord={getSearchedWord}
                  visibleWords={visibleWords}
                  getSelectedCategory={getSelectedCategory}
                  getSelectedFavorite={getSelectedFavorite}
                  onShowTranslation={onShowTranslation}/>

      <AppFooter/>
      </div>
    </div>
  )
}
}
export default App;