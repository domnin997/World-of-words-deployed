import './app-header.css';
import {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class AppHeader extends Component {

    constructor(props) {
        super(props)
        this.state ={
            clicked: 'clicked_btn',
            inactive: 'inactive_btn'
        }
    }

    render () {
        let {btnClicked, aboutBtn, learnBtn} = this.props;
        let a, b;
        if (aboutBtn.clicked) {
           a = this.state.clicked;
            b = this.state.inactive;
        } else {
            b = this.state.clicked;
            a = this.state.inactive;
        }
        return (
        
        <div className='header_wrapper'>
            <Container>
                <Row className='app_header'>
                    <Col pt='40px'
                        lg={4}
                        sm={4}
                        md={4}
                        p={50}> 
                        <h1> World of Words </h1>
                    </Col>
                </Row>
                
                <Row className='app_nav'>
                    <Col onClick={btnClicked} name={'about_btn'} className={a}> О приложении </Col>
                    <Col onClick={btnClicked} name={'learn_btn'} className={b}> Учить слова </Col>
                </Row>
            </Container>
        </div>
        )
    }

}

export default AppHeader;