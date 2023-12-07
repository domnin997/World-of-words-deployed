import {createContext} from 'react';

export const WORDS_ACTIONS = {
  ADD: 'add',
  DELETE: 'delete',
  DELETE_ALL: 'delete-all',
  EDIT: 'edit',
  UPD: 'update',
  PRIORITIZE: 'prioritize',
}

export const initialWordsState = [];

export const wordsReducer = (state, action) => {
  switch (action.type) {
    
    case WORDS_ACTIONS.UPD: {
      console.log(action.words);
      return [...action.words];
    }

    case WORDS_ACTIONS.ADD: {
      console.log(action.newWord)
      return [...state, action.newWord];
    }

    case WORDS_ACTIONS.DELETE_ALL: {
      return [];
    }
  }
}

export const WordsContext = createContext(initialWordsState);