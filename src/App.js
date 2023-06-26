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

searchWord = (items, term) => {
  if (term.length == 0) {
    return items;
  } 

  return items.filter((item) => {
    let newTerm = term.toLowerCase();
    return item.word.toLowerCase().indexOf(newTerm) > -1;
  })
  
}

getSearchedWord = (word) => {
  this.setState({
    searchWord: word,
  })
}

render () {
    
    const visibleWords = this.searchWord(this.state.wordsBase, this.state.searchWord);
    console.log(visibleWords);
    return (
      <div className="App">
        <AppHeader btnClicked={this.btnClicked}/>
          <AppWorkField props={this.state}
                        addWord={this.addWord}
                        onDelete={this.onDel}
                        getSearchedWord={this.getSearchedWord}
                        words={visibleWords}
                        >
              
          </AppWorkField>
        <AppFooter/>
    </div>
    )
  };


}

export default App;