import {createContext} from 'react';

export const USER_ACTIONS = {
  LOG_IN: 'log-in',
  LOG_OUT: 'log-out',
}

const noUser = {
  name: null,
  id: null,
}

export const initialState = {
  isAuthorised: false,
  user: noUser,
}

export const reducer = (state, action) => {
  switch (action.type) {
    
    case USER_ACTIONS.LOG_IN: {
      return {
        isAuthorised: true,
        user: {
          name: null,
          id: action.id,
        }
      }
    }

    case USER_ACTIONS.LOG_OUT: {
      return {
        isAuthorised: false,
        user: noUser,
      }
    }
  }
}

export const AppContext = createContext(initialState);