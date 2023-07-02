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
            arrowLeftClicked: 0,
            rightArrowClicked: 0,
            shiftNum: '',
        }

    }

    onArrowClick = (event) => {
        let shiftSteps = this.state.arrowLeftClicked,
            shiftStepValueBase = this.state.shiftLength,
            shiftTotalValue;

        if (event.target.name === 'left_arrow') {
            
            if (shiftSteps >=0 && shiftSteps < this.state.tapeLength - 1) {
                shiftSteps += 1;
            } 
            else if (shiftSteps === this.state.tapeLength - 1) {
                shiftSteps = 0;
            }
        } 
        
        else if (event.target.name === 'right_arrow') {
            
            if (shiftSteps == 0) {
                shiftSteps = this.state.tapeLength - 1;
            }
            else if (shiftSteps > 0 && shiftSteps <= this.state.tapeLength) {
                shiftSteps -= 1;
            }
        }
        
        shiftTotalValue = `${shiftSteps*shiftStepValueBase}%`;

        this.setState ({
            arrowLeftClicked: shiftSteps,
            shiftNum: shiftTotalValue
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

        let tapeStyle = {
            width: `${tapeElementsArray.length * 100}%`,
            backgroundColor: 'lightgrey',
            transform: `translateX(-${this.state.shiftNum})`,
            transition: `all 1s ease-in-out`
        }

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