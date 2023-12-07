import './authBlock.css';
import {useState, useContext} from 'react';
import { AppContext } from '../../store/store';
import profileIcon from '../../assets/icons/profile-icon.svg';
import AuthWindow from '../authWindow/authWindow';
import {USER_ACTIONS} from '../../store/store';

function AuthBlock () {
  
  const {state, userDispatch} = useContext(AppContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [accName, setAccName] = useState();

  function onAuthClick () {
    setIsModalOpen(!isModalOpen);
  }

  function onLogoutClick () {
    setIsAuthorised(false);
    userDispatch({type: USER_ACTIONS.LOG_OUT})
    setAccName();
  }

  function logIn (login) {
    setIsAuthorised(true);
    setAccName(login);
  }

  const btnText = isAuthorised ? 'Выйти' : 'Войти';
  const onBtnClick = isAuthorised ? onLogoutClick : onAuthClick;
  const accNameClass = accName ? 'auth-block__acc-name' : 'auth-block__acc-name hidden';
  
  const modalWindow = isModalOpen ? <AuthWindow onAuthClick={onAuthClick} onLogIn={logIn}/> : null; 

  return (
    <div className='auth-block'>
      <div className='auth-block__wrap'>
        <div className={accNameClass}>
          <p>{accName}</p>
        </div>
        <button className='auth-block__btn logIn-btn'
                onClick={onBtnClick}>{btnText}</button>
        <img className='auth-profile-icon'
             src={profileIcon}
             alt='Профиль'/>
      </div>
      {modalWindow}
    </div>
  )
}

export default AuthBlock;