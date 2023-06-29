import './app-footer.css';
import {Container, Row, Col} from 'react-bootstrap';

function AppFooter () {
    return (
        <Container className='footer_container'>
            <Row>
                <Col className='app_footer_disclaimer justify-content-center'>
                    Данная страница является частью демонстрационного некоммерческого проекта, созданного в учебных целях. <br/>Копирование, использование и распространение без разрешения автора не допускается.
                </Col>
            </Row>
            <Row className='contacts_wrapper'>
                <Col md lg='4' sm={12} className='pb-3 pt-3'>Телефон: +7 (777) 777-77</Col>
                <Col md lg='4' sm={12} className='pb-3 pt-3'>E-mail: example@example.com</Col>
                <Col md lg='4' sm={12} className='pb-3 pt-3'>Адрес: 3-й кодерский переулок, д. 1</Col>
            </Row>
        </Container>
);}

export default AppFooter;