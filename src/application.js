import { BrowserRouter, Route, Routes } from "react-router-dom";
import './application.css';
import AboutAppPage from "./components/aboutApp/aboutApp";
import { initialState, reducer, AppContext } from "./store/store";
import AppFooter from './components/footer/footer';
import AppHeader from "./components/header/header";
import NotFound from "./components/notFound/notFound";
import { useReducer } from "react";
import DictionaryPage from "./components/pages/dictionaryPage";
import WordPage from "./components/pages/wordPage";
import HomePage from "./components/homePage/homePage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./components/root/root";
import Home from "./pages/home";
import About from "./pages/about/about";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'dictionary',
        children: [
          {
            index: true,
            element: <div>Dictionary</div>,
          },
          {
            path: ':id/edit',
            element: <div>Dictionary</div>,
          },
          {
            path: 'create',
            element: <div>Dictionary</div>,
          },
        ],
      },
    ]
  }
])

function Application () {
  
  const [userState, userDispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{userState, userDispatch}}>
    {/* <BrowserRouter>
      <AppHeader/>
      <main className='workfield'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutAppPage/>} />
          <Route path='/study'>
            <Route path='dictionary' element={<DictionaryPage state={userState}/>}>
              {/*  */}
            {/* </Route>
            <Route path=':wordId' element={<WordPage></WordPage>}></Route>
            <Route path='demo' element={<div>DEMO</div>}></Route> */}
          {/* </Route>
          <Route path='/id' element={<NotFound/>}>
          </Route> */}
        {/* </Routes> */}
      {/* </main>
      <AppFooter/> */}
    {/* </BrowserRouter> */}
    <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default Application;