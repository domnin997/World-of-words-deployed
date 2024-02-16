import './studyHome.css'
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DictionaryPlaceholder from '../../components/dictionaryPlaceholder/dictionaryPlaceholder'

export default function StudyHome () {
  const isUserAuthorised = useSelector((state) => state.auth.isAuthorized)
  return (
    <>
      {isUserAuthorised && 
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
                <NavLink className='link-study' to={'../about'}>
                  О приложении
                </NavLink>
                <NavLink className='link-study' to={'stat'}>
                  Общая статистика
                </NavLink>
                <NavLink className='link-study' to={'dictionaries'}>
                  Мои словари
                </NavLink>
              </nav>
            </aside>
            <div className="study-work-window">
          <Outlet />
            </div>
          </div>
        </div>}
      {!isUserAuthorised && <DictionaryPlaceholder type={'unauthorised'}/>}
    </>
  )
}