import './App.css';
import {Component} from 'react';
import AppHeader from './components/app-header/app-header';
import AppAbout from './components/app-about/app-about';
import StudyField from './components/app-learn-words/app-learn-words';
import AppWorkField from './components/app-work-field/app-work-field';
import AppFooter from './components/app-footer/app-footer';

class App extends Component {
  
  constructor (props) {
    super(props);
      this.state = {
        aboutBtn: {
          clicked: true
        },
        learnBtn: {
          clicked: false
        },
        wordsBase: [
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
        ],
        searchWord: '',
        selectedCategory: 'Все слова',
        selectedFavorite: false
    }
  }

btnClicked = (e) => {
  let btnType = e.target.getAttribute('name')
  if (btnType === 'about_btn') {
    console.log(btnType)
    this.setState({
      aboutBtn: {
        clicked: true
      },
      learnBtn: {
        clicked: false
      }
    })
  } else if (btnType === 'learn_btn') {
    console.log(btnType)
    this.setState({
      aboutBtn: {
        clicked: false
      },
      learnBtn: {
        clicked: true
      }
    })
  }
}

onShowTranslation = (id) => {
    this.setState(({wordsBase}) => {
      let newArr = wordsBase.map((element) => {
        if (element.id === id && element.translationSlide === false) {
          return {...element, translationSlide: true}
          
        } else if (element.id === id && element.translationSlide === true) {
          return {...element, translationSlide: false}
        } else {return element}

      })
      return {
        wordsBase: newArr
      }
    })
}

addWord = (word, translation, category) => {
  let id;
  if (this.state.wordsBase.length > 0) {id = this.state.wordsBase[this.state.wordsBase.length - 1].id + 1} else {id = 1};
  let favorite = false,
      translationSlide = false;
  let newItem = {
      word,
      translation,
      category,
      favorite,
      translationSlide,
      id
  }
  this.setState(({wordsBase}) => {
    let newArr = [...wordsBase, newItem]
      return {
        wordsBase: newArr,
      }
  })
}

onDel = (id) => {
    this.setState(({wordsBase}) => {
      let newArr;
      newArr = wordsBase.filter((elem) => elem.id !== id)
      return  {
        wordsBase: newArr,
      }
    })
}

onFavoriteClick = (id) => {
  this.setState(({wordsBase}) => {
      let newArr = wordsBase.map((element, index) => {
        if (element.id === id && element.favorite === false) {
          return {...element, favorite: true}
        } 
        else if (element.id === id && element.favorite === true) {
          return {...element, favorite: false}}
        else {return {...element}}
      })
      
      return {
        wordsBase: newArr
      }
  })
}

searchWord = (items, term, category, favorite) => {
  if (term.length === 0) {
    
    if (category === 'Все слова' && !favorite) {
        return items;
    } 
    
    else if (category === 'Все слова' && favorite) {
        items.filter((item) => item.favorite);
      } 
      
    else if (category !== 'Все слова' && !favorite) {
        items.filter((item) => item.category == category);
    }

    else if (category !== 'Все слова' && favorite) {
      items.filter((item) => item.category == category && item.favorite == favorite);
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

getSearchedWord = (word) => {
  this.setState({
    searchWord: word,
  })
}

getSelectedCategory = (category) => {
  this.setState({
    selectedCategory: category,
  })
}

getSelectedFavorite = (favorite) => {
  this.setState({
    selectedFavorite: favorite,
  })
}

render () {
    
    const visibleWords = this.searchWord(this.state.wordsBase, this.state.searchWord, this.state.selectedCategory, this.state.selectedFavorite);
    console.log(visibleWords);
    console.log(this.state.selectedFavorite);
    console.log(this.state.selectedCategory)

    if (this.state.aboutBtn.clicked) {
      return (
        <div className="App">
          <div className='page_wrapper'> 
            <AppHeader btnClicked={this.btnClicked}
                       aboutBtn={this.state.aboutBtn}
                       learnBtn={this.state.learnBtn}/> 
            <AppAbout/>
            
            <AppFooter/>
        </div>
      </div>
      )
    } else if (this.state.learnBtn.clicked) {
      return (
        <div className="App">
          <div className='page_wrapper'>
          
          <AppHeader btnClicked={this.btnClicked}
                     aboutBtn={this.state.aboutBtn}
                     learnBtn={this.state.learnBtn}/>

          <StudyField wordsBase={this.state.wordsBase}
                      addWord={this.addWord}
                      onDelete={this.onDel}
                      onFavoriteClick={this.onFavoriteClick}
                      getSearchedWord={this.getSearchedWord}
                      visibleWords={visibleWords}
                      getSelectedCategory={this.getSelectedCategory}
                      getSelectedFavorite={this.getSelectedFavorite}
                      onShowTranslation={this.onShowTranslation}/>

          <AppFooter/>
          </div>
        </div>
      )
    }
  };
}

export default App;