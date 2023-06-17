import './app-header.css';
import {Container, Row, Col} from 'react-bootstrap';

function AppHeader () {
    return (
        <div className='header_wrapper'>
        <Container>
            <Row className='app_header'>
                <Col pt='40px'
                    sm={4}
                    md={4}
                    p={50}> 
                     <h1> World of Words </h1>
                </Col>
            </Row>
            
            <Row className='app_nav'>
                <Col> О приложении </Col>
                <Col> Учить слова </Col>
                <Col> Контакты </Col>
                

            </Row>
        </Container>
        </div>
    );
}

export default AppHeader;