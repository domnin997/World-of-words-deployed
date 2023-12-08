import DictionaryPlaceholder from "../dictionaryPlaceholder/dictionaryPlaceholder";
import WordsList from "../personalDictionary/wordsList";
import { useContext, useEffect, useReducer } from "react";
import { initialWordsState, wordsReducer, WordsContext, WORDS_ACTIONS } from "../../store/dictionary.store";
import { AppContext } from "../../store/store";
import { wordsService } from "../../services/words.service";
import DictionaryMenu from "../dictionaryMenu/dictionaryMenu";

function DictionaryPage () {
  const {userState} = useContext(AppContext);
  const [wordsState, wordsDispatch] = useReducer(wordsReducer, initialWordsState);

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

  const pageContent = userState.isAuthorised ? <div className="page-wrap"><DictionaryMenu/><WordsList/></div> : <DictionaryPlaceholder/>

  return (
    
   <WordsContext.Provider value={{wordsState, wordsDispatch}}>
     {pageContent}
   </WordsContext.Provider>
  )
}

export default DictionaryPage;