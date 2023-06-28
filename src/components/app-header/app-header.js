import './app-header.css';
import {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class AppHeader extends Component {

    constructor(props) {
        super(props)
        this.state ={
            active: 'active_btn',
            inactive: 'inactive_btn'
        }
    }
 
    render () {
        let {btnClicked, aboutBtn, learnBtn} = this.props;
        let aboutBtnState, learnBtnState;
        if (aboutBtn.clicked) {
            aboutBtnState = this.state.active;
            learnBtnState = this.state.inactive;
        } else {
            learnBtnState = this.state.active;
            aboutBtnState = this.state.inactive;
        }
        
        return (
        
            <div className='header_wrapper'>
                <Container>
                    <Row className='header_block'>
                        <Col sm md lg='5'> 
                            <h1> World of Words </h1>
                        </Col>
                    </Row>
                    
                    <Row className='nav_block'>
                        <Col onClick={btnClicked} name={'about_btn'} className={aboutBtnState}> О приложении </Col>
                        <Col onClick={btnClicked} name={'learn_btn'} className={learnBtnState}> Учить слова </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AppHeader;