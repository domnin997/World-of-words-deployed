import './app-about-item.css';
import {Component} from 'react';
import {Col} from 'react-bootstrap';

class AppAboutItem extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        let {pic, text} = this.props;

        return (
            <Col lg={6}
                 className='item_wrapper'>
                    <div className='about_wrapper'>
                        <div className = 'about_img_container'>
                            <img src={pic} width='50px' height='50px'/>
                        </div>
                        <div className='about_text_container'>
                            {text}  
                        </div>
                    </div>
            </Col>
        )
        
    };
}

// pt-4 pb-4
export default AppAboutItem;