import './authBlock.css';
import profileIcon from '../../assets/icons/profile-icon.svg';

function AuthBlock () {
  
  return (
    <div className='auth-block'>
      <div className='auth-block__wrap'>
        <button className='auth-block__btn logIn-btn'>Войти</button>
        <img className='auth-profile-icon'
             src={profileIcon}
             alt='Профиль'/>
      </div>
    </div>
  )
}

export default AuthBlock;