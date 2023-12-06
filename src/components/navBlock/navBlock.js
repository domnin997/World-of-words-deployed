import './navBlock.css';
import {Link} from 'react-router-dom';

function NavBlock ({headerBtnClick, aboutBtn}) {
  
  const btnClass = 'nav-btn';
  const learnClass = aboutBtn ? btnClass : `${btnClass} active`;
  const aboutClass = aboutBtn ? `${btnClass} active` : btnClass;

  return (
    <div className='nav-block-wrap'>
      <div className='nav-block'>
        <div className='nav-block__btn-wrap'>
          <Link to={'about'}
                onClick={headerBtnClick}
                  name={'about_btn'}
                  className={aboutClass}> 
              О приложении
          </Link>
        </div>
        <div className='nav-block__btn-wrap'>
          <Link to={'study'}
                onClick={headerBtnClick}
                  name={'learn_btn'}
                  className={learnClass}>
              Учить слова
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBlock;