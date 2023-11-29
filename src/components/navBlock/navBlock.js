import './navBlock.css';

function NavBlock ({headerBtnClick, aboutBtn}) {
  
  const btnClass = 'nav-btn';
  const learnClass = aboutBtn ? btnClass : `${btnClass} active`;
  const aboutClass = aboutBtn ? `${btnClass} active` : btnClass;

  return (
    <div className='nav-block'>
      <div className='nav-block-wrap'>
        <div className='nav-block__btn-wrap'>
          <button onClick={headerBtnClick}
                  name={'about_btn'}
                  className={aboutClass}> 
              О приложении
          </button>
        </div>
        <div className='nav-block__btn-wrap'>
          <button onClick={headerBtnClick}
                  name={'learn_btn'}
                  className={learnClass}>
              Учить слова
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBlock;