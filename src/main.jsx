import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/base.css'
import App from './App'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store/reduxStore'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);