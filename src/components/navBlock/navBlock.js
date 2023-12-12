import './navBlock.css';
import {NavLink} from 'react-router-dom';

function NavBlock () {
  return (
    <div className='nav-block-wrap'>
      <div className='nav-block'>
        <div className='nav-block__btn-wrap'>
          <NavLink to={'about'} name={'about_btn'} className='nav-block__btn'>
            О приложении
          </NavLink>
        </div>
        <div className='nav-block__btn-wrap'>
          <NavLink to={'study'} name={'learn_btn'} className='nav-block__btn'>
            Учить слова
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBlock;