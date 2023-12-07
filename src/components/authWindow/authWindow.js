import './authWindow.css';
import UserService from '../../services/user.service';
import {useState, useContext} from 'react';
import { AppContext, USER_ACTIONS } from '../../store/store';


function AuthWindow (props) {

  const userService = new UserService();
  const onClose = props.onAuthClick;
  const onLogIn = props.onLogIn;

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [userMsg, setUserMsg] = useState('');

  const [isRegMode, setIsRegMode] = useState(false);

  const {userDispatch} = useContext(AppContext);
  
  async function onAuthorise () {
    const response = await userService.auth({login, password});
    
    if (!response.status) {
      setUserMsg(response.body);
      console.log('Ошибка');
    } else {
      onClose();
      onLogIn(login);
      userDispatch({type: USER_ACTIONS.LOG_IN, id: response.id})
      console.log('Успешно');
    }
  }

  async function onRegister () {
    const response = await userService.reg({login, password});
    console.log(response);
    //console.log('Успешная регистрация');
  }

  const headerText = isRegMode ? 'Регистрация' : 'Вход';
  const btnText = isRegMode ? 'Зарегистрироваться' : 'Войти';
  const onSubmit = isRegMode ? onRegister : onAuthorise;

  return (
    <div className='modal-overlay'>
    <div className='auth-window'>
      <div className='auth-window__header-wrap'>
        <h2 className='auth-window__h2'>{headerText}</h2>
        <div className='auth-window__close-wrap'>
          <p className='auth-window__close'
             onClick={onClose}>&#10006;</p>
        </div>
      </div>
      <form className='auth-form'>
        <div className='auth-form__input-wrap'>
          <input className='auth-form__input'
                 placeholder='Имя'
                 value={login}
                 onInput={(e) => {setLogin(e.target.value)}}
                 type='text'/>
        </div>
        <div className='auth-form__input-wrap'>
          <input className='auth-form__input'
                 placeholder='Пароль'
                 value={password}
                 onInput={(e) => {setPassword(e.target.value)}}
                 type='password'/>
        </div>
        <button className='auth-form__submit-btn'
                type='submit'
                onClick={(e) => {e.preventDefault(); onSubmit()}}>{btnText}</button>
      </form>
      <div className='auth-window__msg-block'>
        <p className='auth-window__msg'>{userMsg}</p>
      </div>
      <div className='auth-window__reg-cont'>
        <p>Еще нет аккаунта?</p><a onClick={(e) => {setIsRegMode(!isRegMode)}}>зарегистрируйтесь</a>
      </div>
    </div>
    </div>
  )
}

export default AuthWindow;