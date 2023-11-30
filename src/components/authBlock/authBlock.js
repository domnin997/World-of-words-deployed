import './authBlock.css';
import {useState} from 'react';
import profileIcon from '../../assets/icons/profile-icon.svg';
import AuthWindow from '../authWindow/authWindow';

function AuthBlock () {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [accName, setAccName] = useState();

  function onAuthClick () {
    setIsModalOpen(!isModalOpen);
  }

  function onLogoutClick () {
    setIsAuthorised(false);
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