import './app-footer.css';
import {Container, Row, Col} from 'react-bootstrap';

function AppFooter () {
    return (
    <div className='footer_wrapper'>
        <Container className='footer_container'>
            <Row>
                <Col className='app_footer_disclaimer'>
                        Данная страница является частью демонстрационного некоммерческого проекта, созданного в учебных целях. <br/>Копирование, использование и распространение без разрешения автора не допускается.
                </Col>
            </Row>
            <Row className='contacts_wrapper'>
                <Col>
                        Тел: +7 (777) 777-77
                </Col>
                <Col>
                        E-mail: example@example.com
                </Col>
                <Col>
                        Адрес: 3-й кодерский переулок, д. 1
                </Col>
            </Row>
        </Container>
    </div>
);}

export default AppFooter;