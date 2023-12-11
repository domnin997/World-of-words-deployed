import DictionaryPlaceholder from "../dictionaryPlaceholder/dictionaryPlaceholder";
import WordsList from "../wordsList/wordsList";
import DictionaryFilters from "../dictionaryFilters/dictionaryFilters";
import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { initialWordsState, wordsReducer, WordsContext, WORDS_ACTIONS } from "../../store/dictionary.store";
import { AppContext } from "../../store/store";
import { wordsService } from "../../services/words.service";
import DictionaryMenu from "../dictionaryMenu/dictionaryMenu";

function DictionaryPage () {
  const {userState} = useContext(AppContext);
  const [wordsState, wordsDispatch] = useReducer(wordsReducer, initialWordsState);
  const [wordFilter, setWordFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState(false);

  useEffect(() => {
    async function getWords (id) {
      const words = await wordsService.getWords(id);
      if (words) {
        wordsDispatch({type: WORDS_ACTIONS.UPD, words});
      } else {
        console.log('Empty');
      }
    }
    if (userState.isAuthorised) {
      getWords(userState.user.id);
    }
  }, [userState])

  const updateFiltered = (search, priority) => {
    setWordFilter(search);
    setPriorityFilter(priority);
    console.log(priority);
  }

  const filteredWords = wordsState.filter((word) => {
    return word.word.toLowerCase().includes(wordFilter.toLowerCase());
  });
  
  const createPageContent = () => {
    if (userState.isAuthorised) {
      return (
        <div className="page-wrap">
          <DictionaryMenu/>
          <DictionaryFilters updater={updateFiltered}/>
          <WordsList words={filteredWords}/>
        </div>
      )
    } else {
       return <DictionaryPlaceholder/>;
    }
  }
  const pageContent = createPageContent();

  return (
   <WordsContext.Provider value={{wordsState, wordsDispatch}}>
     {pageContent}
   </WordsContext.Provider>
  )
}

export default DictionaryPage;