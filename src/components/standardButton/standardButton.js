import './standardButton.css';

function StandardButton (props) {

  const {btnText, btnSize, clickHandler, btnType} = props;
  const sizeClass = btnSize ? btnSize : 'medium';
  const type = btnType ? btnType : 'button';

  return (
    <div className={`standard-btn-wrap`}>
      <button className={`standard-btn ${sizeClass}`}
              onClick={clickHandler}
              type={type}>
        {btnText}
      </button>
    </div>
  )
}

export default StandardButton;