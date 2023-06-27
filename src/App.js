import './App.css';
import {Component} from 'react';
import AppHeader from './components/app-header/app-header';
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
            id: 1
          }, {
            word: 'Accounting',
            translation: 'Бухгалтерия',
            category: 'Работа',
            id: 2
          },
        ],
        searchWord: '',
        selectedCategory: 'Все слова',
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

addWord = (word, translation, category) => {
  let id;
  if (this.state.wordsBase.length > 0) {id = this.state.wordsBase[this.state.wordsBase.length - 1].id + 1} else {id = 1};
  let newItem = {
    word,
    translation,
    category,
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

searchWord = (items, term, category) => {
  if (term.length == 0) {
    if (category==='Все слова') {
      return items;
    } else {
      items.filter((item) => item.category==category);
    }
    
  } 

  return items.filter((item) => {
    let newTerm = term.toLowerCase();
    if (category==='Все слова') {return item.word.toLowerCase().indexOf(newTerm) > -1} 
    else {return item.word.toLowerCase().indexOf(newTerm) > -1 && item.category==category}
    
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

render () {
    
    const visibleWords = this.searchWord(this.state.wordsBase, this.state.searchWord, this.state.selectedCategory);
    console.log(visibleWords);
    console.log(this.state.selectedCategory)
    return (
      <div className="App">
        <AppHeader btnClicked={this.btnClicked}
                   aboutBtn={this.state.aboutBtn}
                   learnBtn={this.state.learnBtn}/>
          <AppWorkField props={this.state}
                        addWord={this.addWord}
                        onDelete={this.onDel}
                        getSearchedWord={this.getSearchedWord}
                        getSelectedCategory={this.getSelectedCategory}
                        words={visibleWords}
                        >
              
          </AppWorkField>
        <AppFooter/>
    </div>
    )
  };


}

export default App;