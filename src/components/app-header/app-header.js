import './app-header.css';
import {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class AppHeader extends Component {

    constructor(props) {
        super(props)
    }

    render () {
        let {btnClicked} = this.props;
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
                    <Col onClick={btnClicked} name={'about_btn'}> О приложении </Col>
                    <Col onClick={btnClicked} name={'learn_btn'}> Учить слова </Col>
                    <Col> Контакты </Col>
                    

                </Row>
            </Container>
        </div>
        )
    }

}

export default AppHeader;