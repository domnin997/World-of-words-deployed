import './app-list-item.css';
import deleteIcon from './delete_icon.png';
import emptyStar from './empty_star.png';
import yellowStar from './yellow_star.png';

function ListItem (props) {
    let starIcon,
        classList;

        if (props.favorite) {
            starIcon = yellowStar;
            classList='sec_nested favorite_word'
        } else if (!props.favorite) {
            starIcon = emptyStar;
            classList='sec_nested'
        }

    return ( 
        <div className='words_list_block'>

            <div className='foreign_word_container'>
                    <div className={classList}>{props.word}</div>
            </div>

            <div className='translation_container'>
                <div className='nested_element'> 
                    <div className='sec_nested'>{props.translation}</div>
                </div>
            </div>

            <div className='star_button button_container'>
                <div className='img_container'>
                    <img src={starIcon}
                         width='20px' 
                         height='20px'
                         alt='star_icon'
                         onClick={props.onFavoriteClick}>
                    </img>
                </div>
            </div>

            <div className='delete_button button_container'>
                <div className='img_container'>
                    <img src={deleteIcon}
                         width='20px' 
                         height='20px'
                         alt='delete_icon'
                         onClick={props.onDelete}>
                    </img>
                </div>
            </div>
            
        </div>
    );
}

export default ListItem;