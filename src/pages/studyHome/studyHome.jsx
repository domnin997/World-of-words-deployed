import './studyHome.css';
import { AppContext } from "../../store/store"
import {useContext} from 'react'
import { NavLink, Outlet } from "react-router-dom";
import DictionaryPlaceholder from "../../components/dictionaryPlaceholder/dictionaryPlaceholder";

export default function StudyHome () {
  const {userState} = useContext(AppContext);
  function createContent () {
    if (userState.isAuthorised) {
      return (
        <div className="study-wrapper">
          <div className="study-header">
            <h2>
              Рабочий кабинет полиглота
            </h2>
          </div>
          <div className="study-workfield">
            <aside className='nav-wrapper'>
              <h3>Навигация</h3>
              <nav className="study-menu">
                <NavLink className='link-study' to={'../about'}>О приложении</NavLink>
                <NavLink className='link-study' to={'stat'}>Общая статистика</NavLink>
                <NavLink className='link-study' to={'dictionaries'}>Мои словари</NavLink>
              </nav>
            </aside>
            <div className="study-work-window">
              <Outlet />
            </div>
          </div>
       </div>
      )
    } else {
      return (
        <DictionaryPlaceholder type={'unauthorised'}/>
      )
    }
  }
  return (
    <>
      {createContent()}
    </>
  )
}