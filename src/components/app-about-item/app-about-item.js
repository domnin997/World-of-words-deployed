import './app-about-item.css';

function AppAboutItem (props) {
    
    const {pic, text} = props;
        
    return (
        <div className='item_wrapper'>
            <div className='about_wrapper'>
                <div className = 'about_img_container'>
                    <img src={pic} width='50px' height='50px' alt='about_pic'/>
                </div>
                <div className='about_text_container'>
                    {text}  
                </div>
            </div>
        </div>
    )  
};

export default AppAboutItem;