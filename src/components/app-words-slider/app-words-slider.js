import './app-words-slider.css';
import {Component} from 'react';
import RightArrow from './rigth_arrow2.png';
import LeftArrow from './left_arrow2.png';

class AppSlider extends Component {
    constructor (props) {
        super(props)
        this.state = {
            tapeLength: this.props.visibleWords.length,
            shiftLength: (100 / this.props.visibleWords.length),
            arrowClicked: 0,
            rightArrowClicked: 0,
            shiftNum: '',
        }

    }

    onArrowClick = (event) => {
        let leftArrow = this.state.arrowClicked,
            rightArrow = this.state.rightArrowClicked,
            shiftStepValue = this.state.shiftLength;

        if (event.target.name === 'rigth_arrow') {
            if (leftArrow > 0) {
                rightArrow+=1;
                    leftArrow-=1;
            }
        }
        let timesClicked = this.state.arrowClicked + 1,
            shiftLength = timesClicked*this.state.shiftLength,
            shiftNumber;
            if (shiftLength>=100) {
                shiftNumber = `${0}%`
            } else if (event.target.name == 'left_arrow') {
                shiftNumber = `-${timesClicked*this.state.shiftLength}%`;
            } else if (event.target.name == 'right_arrow') {
                shiftNumber = `${timesClicked*this.state.shiftLength}%`;
            }
            
        this.setState ({
            arrowClicked: timesClicked,
            shiftNum: shiftNumber
        })
    }

    render () {

        let tapeElementsArray = this.props.visibleWords;
        let tapeElements = tapeElementsArray.map((item) => {
            return (
                <div className='tape_word_container'>
                    <div className='item_word'> {item.word} </div>
                    <button> Показать перевод </button>
                    <div className='item_word_translation'> {item.translation} </div>
                </div>
            )
        })

        let tapeWidth = `${tapeElementsArray.length * 100}%`
        let tapeStyle = {
            width: `${tapeElementsArray.length * 100}%`,
            backgroundColor: 'lightgrey',
            transform: `translateX(${this.state.shiftNum})`
        }
        // {tapeWidth}
        console.log(tapeStyle)
        console.log(this.state)

        return (
        <div className='slider_container'>
            
            <div className='slider_window'> 
                <div className='slider_tape' style={tapeStyle}>
                    {tapeElements}
                </div>
            </div>

            <div className='arrow_container'>
                <div>
                    <img src={LeftArrow}
                          height='50px'
                          width='50px'
                          name='left_arrow'
                          onClick={this.onArrowClick}>
                    </img>
                </div>
                <div>
                    <img src={RightArrow}
                          height='50px'
                          width='50px'
                          name='right_arrow'
                          onClick={this.onArrowClick}
                          >
                        
                    </img>
                </div>
            </div>
        </div>
        )
    }

}

export default AppSlider;