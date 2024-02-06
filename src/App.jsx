import {
  initialState,
  reducer,
  AppContext
} from './store/store'
import NotFound from './components/notFound/notFound'
import { useReducer } from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Root from './components/root/root'
import Home from './pages/home'
import About from './pages/about/about'
import StudyHome from './pages/studyHome/studyHome'
import CommonStat from './pages/commonStat/commonStat'
import Dictionary from './pages/dictionary/dictionary'
import Dictionaries from './pages/dictionaries/dictionaries'
import EditDictionary from './pages/dictionary/dictionaryEdit'
import EditWord from './pages/word/wordEdit'
import WordInfo from './pages/word/wordInfo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound/>,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      {
        path: 'study',
        element: <StudyHome />,
        children: [
          {
            path: 'dictionaries',
            children: [
              { index: true, element: <Dictionaries/> },
              { path: 'create', element: <EditDictionary /> },
              { path: ':dictionaryId', element: <Dictionary /> },
              { path: ':dictionaryId/edit', element: <EditDictionary /> },
              { path: ':dictionaryId/create', element: <EditWord /> },
              { path: ':dictionaryId/:wordId', element: <WordInfo/> },
              { path: ':dictionaryId/:wordId/edit/', element: <EditWord /> }
            ]
          },
          { path: 'stat', element: <CommonStat /> },
          { path: 'dictionary', element: <Dictionary /> }
        ]
      },
    ]
  }
])

export default function App () {
  const [userState, userDispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{userState, userDispatch}}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}