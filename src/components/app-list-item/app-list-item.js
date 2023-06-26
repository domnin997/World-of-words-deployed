import './app-list-item.css';
import {Container, Row, Col} from 'react-bootstrap';
import deleteIcon from './delete_icon.png';

function ListItem (props) {
    
    return (
        <div className='word_container'>
        <Container className='words_container'>
            <Row className='word_line'>
                <Col className='foreign_word_container'
                     lg={2}>
                    {props.word}
                </Col>
                <Col className='translation_container'
                     lg={4}>
                    {props.translation}
                </Col>
                <Col className='word_category'>
                    {props.category}
                </Col>
                <Col className='delete_button'
                     lg={1}>
                    <img src={deleteIcon} width='20px' height='20px' onClick={props.onDelete}></img>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default ListItem;