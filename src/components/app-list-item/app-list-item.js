import './app-list-item.css';
import {Container, Row, Col} from 'react-bootstrap';
import deleteIcon from './delete_icon.png';
import emptyStar from './empty_star.png';
import yellowStar from './yellow_star.png';

function ListItem (props) {
    let starIcon;
    if (props.favorite) {
        starIcon = yellowStar;
    } else if (!props.favorite) {
        starIcon = emptyStar;
    }

    return ( 
        <Container className='words_list_block'>
            <Row className='word_line word_container'>
                <Col className='foreign_word_container'
                     xs sm md lg={2}>
                    <div className='nested_element'>
                        <div className='sec_nested'>{props.word}</div>
                    </div>
                </Col>

                <Col className='translation_container'
                     xs sm md lg={4}>
                    <div className='nested_element'> 
                        <div className='sec_nested'>{props.translation}</div>
                    </div>
                </Col>

                <Col className='word_category'
                     xs sm md lg={4}>
                    <div className='nested_element'>
                        <div className='sec_nested'> {props.category}</div>
                    </div>
                </Col>

                <Col className='star_button button_container'
                     xs sm md lg={1}>
                    <div>
                        <img src={starIcon}
                             width='20px' 
                             height='20px'
                             onClick={props.onFavoriteClick}>
                        </img>
                    </div>
                </Col>

                <Col className='button_container'
                     xs sm md lg={1}>
                    <div>
                        <img src={deleteIcon}
                             width='20px' 
                             height='20px' 
                             onClick={props.onDelete}>
                        </img>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ListItem;