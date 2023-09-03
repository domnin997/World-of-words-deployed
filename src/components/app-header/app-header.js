import './app-header.css';

function AppHeader (props) {
    
    let {headerBtnClick, aboutBtn} = props;
    let aboutStatus, learnStatus;
        
        if (aboutBtn) {
            aboutStatus = 'active_btn';
            learnStatus = 'inactive_btn';
        } else {
            learnStatus = 'active_btn';
            aboutStatus = 'inactive_btn';
        }

    return (
       
        <div className='header_block'>
            <div className='header_logo_block'>
                    <h1> World of Words </h1>   
            </div>
            <div className='nav_block'> 
                <div className='nav_btn_cont'>
                    <button onClick={headerBtnClick}
                            name={'about_btn'}
                            className={aboutStatus}> 
                        О приложении
                    </button>
                </div>
                <div className='nav_btn_cont'>
                    <button onClick={headerBtnClick}
                            name={'learn_btn'}
                            className={learnStatus}>
                        Учить слова
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;