import './authBlock.css'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import profileIcon from '../../assets/icons/profile-icon.svg'
import AuthWindow from '../authWindow/authWindow'
import { setIsLoginOpened, setLoggedUser } from '../../store/auth'

function AuthBlock () {
  const dispatch = useDispatch()

  const isLoginOpened = useSelector((state) => state.auth.isLoginOpened)
  const isAuthorised = useSelector((state) => state.auth.isAuthorized)
  const userName = useSelector((state) => state.auth.name)

  const onLogInClick = useCallback(
    () => dispatch(setIsLoginOpened(true), [dispatch])
  )
  const onLogOutClick = useCallback(
    () => dispatch(setLoggedUser(null), [dispatch])
  )

  // Test code
    console.log(`Auth status: ${isAuthorised}`)
  // Test code
  
  const btnText = isAuthorised ? 'Выйти' : 'Войти'
  const onBtnClick = isAuthorised ? onLogOutClick : onLogInClick
  const accNameClass = userName ? 'auth-block__acc-name' : 'auth-block__acc-name hidden'
  const modalWindow = isLoginOpened ? <AuthWindow/> : null 

  return (
    <div className='auth-block'>
      <div className='auth-block__wrap'>
        <div className={accNameClass}>
          <p>{userName}</p>
        </div>
        <button className='auth-block__btn logIn-btn' onClick={onBtnClick}>
          {btnText}
        </button>
        <img className='auth-profile-icon'
             src={profileIcon}
             alt='Профиль'/>
      </div>
      {modalWindow}
    </div>
  )
}

export default AuthBlock