import './app-list-item.css';
import {Container, Row, Col} from 'react-bootstrap';
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
        <Container className='words_list_block'>
            <Row className='word_line word_container'>
                <Col className='foreign_word_container'
                     
                     xs={6} sm={3} md={3} lg={3}
                     >
                    <div className='nested_element'>
                        <div className={classList}>{props.word}</div>
                    </div>
                </Col>

                <Col className='translation_container'
                     xs={6} sm={7} md={7} lg={7}
                     >
                    <div className='nested_element'> 
                        <div className='sec_nested'>{props.translation}</div>
                    </div>
                </Col>

                {/* <Col className='word_category'
                     md lg={3}
                     xs sm={4}>
                    <div className='nested_element'>
                        <div className='sec_nested'> {props.category}</div>
                    </div>
                </Col> */}

                <Col className='star_button button_container'
                     xs={6} sm={1} md={1} lg={1}>
                     
                    <div className='img_container'>
                        <img src={starIcon}
                             width='20px' 
                             height='20px'
                             alt='star_icon'
                             onClick={props.onFavoriteClick}>
                        </img>
                    </div>
                </Col>

                <Col className='button_container'
                     xs={6} sm={1} md={1} lg={1}
                     >
                    <div className='img_container'>
                        <img src={deleteIcon}
                             width='20px' 
                             height='20px'
                             alt='delete_icon'
                             onClick={props.onDelete}>
                        </img>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ListItem;