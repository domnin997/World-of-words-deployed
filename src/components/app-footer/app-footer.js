import './app-footer.css';
import {Container, Row, Col} from 'react-bootstrap';

function AppFooter () {
    return (
        <div className='app_footer_wrapper'>
            <Container className='app_footer_container'>
                <Row>
                    <Col className='app_footer_disclaimer'>
                        Данная страница является частью демонстрационного некоммерческого проекта, созданного в учебных целях.
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}
                        className='app_footer_contacts'>
                        Контактная информация:
                    </Col>
                </Row>
                <Row>
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
    );
}

export default AppFooter;