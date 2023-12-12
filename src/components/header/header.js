import './header.css';
import logoIcon from '../../assets/icons/app-logo.svg';
import AuthBlock from '../authBlock/authBlock';
import NavBlock from '../navBlock/navBlock';

function AppHeader () {
  return (
    <header className='header'>
      <div className='header-wrapper'>
        <div className='header__logo-auth-layout'>
          <div className='header__logo-auth-container'>
            <div className='header-logo'>
              <h1 className='header-logo__text'>Полиглот</h1>
              <div className='header-logo__icon-container'>
              <img className='header-logo__icon'
                    src={logoIcon}
                    alt='Логотип'/>
              </div>
            </div>
            <AuthBlock/>
          </div>
        </div>
        <div className='header__nav-wrap'>
          <NavBlock/>
        </div>
      </div>
    </header>
  )
}

export default AppHeader;