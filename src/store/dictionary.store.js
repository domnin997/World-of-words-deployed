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
      return [...action.words];
    }

    case WORDS_ACTIONS.ADD: {
      return [...state, action.newWord];
    }

    case WORDS_ACTIONS.DELETE_ALL: {
      return [];
    }

    case WORDS_ACTIONS.DELETE: {
      const newArray = state.filter((word) => {
        return word.id !== action.id;
      })
      return newArray;
    }

    default: {
      return state;
    } 
  }
}

export const WordsContext = createContext(initialWordsState);