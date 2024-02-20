import './authWindow.css'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
import UserService from '../../services/user.service'
import StandardButton from '../standardButton/standardButton'
import { setLoggedUser, setIsLoginOpened } from '../../store/auth'

function AuthWindow () {
  const dispatch = useDispatch()
  const onClose = () => {
    dispatch(setIsLoginOpened(false))
  }
  const userService = new UserService()

  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [userMsg, setUserMsg] = useState('')

  const [isRegMode, setIsRegMode] = useState(false)
  
  async function tryAuth () {
    const response = await userService.tryAuth({ identifier, password })
    if (response.status) {
      dispatch(setLoggedUser({
        name: response.userData.name,
        token: response.userData.token
      }))
    } else {
      setUserMsg(response.reason)
    }
  }

  async function tryRegister () {
    const response = await userService.tryRegister({identifier, password})
    if (response.isRegistered) {
      
    } else {
      setUserMsg(response.reason)
    }
  }

  const headerText = isRegMode ? 'Регистрация' : 'Вход';
  const btnText = isRegMode ? 'Зарегистрироваться' : 'Войти';
  const onSubmit = isRegMode ? tryRegister : tryAuth;

  return (
  <>
    { createPortal (
    <div className='modal-overlay'>
    <div className='auth-window'>
      <div className='auth-window__header-wrap'>
        <h2 className='auth-window__h2'>
          {headerText}
        </h2>
        <div className='auth-window__close-wrap'>
          <p className='auth-window__close'
             onClick={() => onClose()}>&#10006;</p>
        </div>
      </div>
      <form className='auth-form'>
        <div className='auth-form__input-wrap'>
          <input 
            className='auth-form__input'
            placeholder='Имя пользователя'
            value={identifier}
            onInput={(e) => {setIdentifier(e.target.value)}}
            type='text'
          />
        </div>
        <div className='auth-form__input-wrap'>
          <input 
            className='auth-form__input'
            placeholder='Пароль'
            value={password}
            onInput={(e) => {setPassword(e.target.value)}}
            type='password'
          />
        </div>
        <StandardButton
          btnText={btnText}
          btnType={'submit'}
          clickHandler={(e) => {e.preventDefault(); onSubmit()}}
        />
      </form>
      <div className='auth-window__msg-block'>
        <p className='auth-window__msg'>{userMsg}</p>
      </div>
      <div className='auth-window__reg-cont'>
        <p>
          {!isRegMode && 'Еще нет аккаунта?'}
          {isRegMode && 'Уже есть аккаунт?'}
        </p>
        <a 
          className='auth-window__change-mode'
          onClick={() => {setIsRegMode(!isRegMode)}}>
          {!isRegMode && 'Зарегистрируйтесь'}
          {isRegMode && 'Войдите в аккаунт'}
        </a>
      </div>
    </div>
    </div>,
    document.getElementById('portal')
  )}
  </>)
}

export default AuthWindow