import './aboutAppItem.css';

function AppAboutItem (props) {
  const {pic, text} = props;
  return (
    <div className='app-about-item'>
      <img className='app-about-item__icon' src={pic} alt='aboutIcon' />
      <div className='app-about-item__text'>
        {text}
      </div>
    </div>
  )  
};

export default AppAboutItem;