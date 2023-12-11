import { BrowserRouter, Route, Routes } from "react-router-dom";
import './application.css';
import AboutAppPage from "./components/aboutApp/aboutApp";
import { initialState, reducer, AppContext } from "./store/store";
import AppFooter from './components/footer/footer';
import AppHeader from "./components/header/header";
import NotFound from "./components/notFound/notFound";
import { useReducer } from "react";
import DictionaryPage from "./components/pages/dictionaryPage";

function Application () {
  
  const [userState, userDispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{userState, userDispatch}}>
    <BrowserRouter>
      <AppHeader/>
      <main className='workfield'>
        <Routes>
          <Route path='/about' element={<AboutAppPage/>}></Route>
          <Route path='/study' element={<DictionaryPage state={userState}/>}></Route>
          <Route path='/study/:id' element={<NotFound/>}></Route>
        </Routes>
      </main>
      <AppFooter/>
    </BrowserRouter>
    </AppContext.Provider>
  )
}

export default Application;