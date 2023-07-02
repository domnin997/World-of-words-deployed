import './app-tape-element.css';

function SliderTapeElement (props) {

    let translationStyle;

    if (props.translationSlide) {
        translationStyle = 'item_word_translation translation_displayed'
    } else 
    {translationStyle = 'item_word_translation not_displayed'}

    return (
        <div className='tape_word_container'>
            
                <div className='item_word'> {props.word} </div>
                    <button onClick={props.onShowTranslation}> Показать перевод </button>
                <div className={translationStyle}> {props.translation} </div>
            
        </div>
    ) 
}

export default SliderTapeElement;