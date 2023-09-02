import './app-words-slider.css';
import { useState } from 'react';
import RightArrow from './rigth_arrow2.png';
import LeftArrow from './left_arrow2.png';
import SliderTapeElement from '../app-words-tape/app-tape-element';

function AppWordSlider (props) {
    
    const visibleWords = props.visibleWords,
          tapeElementsArray = props.visibleWords,
          onShowTranslation = props.onShowTranslation;

    let [sliderState, setSliderState] = useState({
            tapeLength: visibleWords.length,
            shiftLength: (100 / visibleWords.length),
            leftArrowClicked: 0,
            rightArrowClicked: 0,
            shiftNum: '',
    })

    const onArrowClick = (event) => {
        let shiftSteps = sliderState.leftArrowClicked,
            shiftStepValueBase = sliderState.shiftLength,
            shiftTotalValue;

        if (event.target.name === 'left_arrow') {
            
            if (shiftSteps >=0 && shiftSteps < sliderState.tapeLength - 1) {
                shiftSteps += 1;
            } 
            else if (shiftSteps === sliderState.tapeLength - 1) {
                shiftSteps = 0;
            }
        } 
        
        else if (event.target.name === 'right_arrow') {
            
            if (shiftSteps == 0) {
                shiftSteps = sliderState.tapeLength - 1;
            }
            else if (shiftSteps > 0 && shiftSteps <= sliderState.tapeLength) {
                shiftSteps -= 1;
            }
        }
        
        shiftTotalValue = `${shiftSteps*shiftStepValueBase}%`;

        setSliderState({
            ...sliderState,
            leftArrowClicked: shiftSteps,
            shiftNum: shiftTotalValue
        })
    }

    let tapeElements = tapeElementsArray.map((el) => {
        let {id, ...itemProps} = el;
        return (
            <SliderTapeElement key={id} {...itemProps}
                               onShowTranslation={() => onShowTranslation(id)}
                               />
        )
    })

    let tapeStyle = {
            width: `${tapeElementsArray.length * 100}%`,
            backgroundColor: 'lightgrey',
            transform: `translateX(-${sliderState.shiftNum})`,
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
                          onClick={onArrowClick}>
                    </img>
                </div>
                <div>
                    <img src={RightArrow}
                          height='50px'
                          width='50px'
                          name='right_arrow'
                          onClick={onArrowClick}
                          >
                        
                    </img>
                </div>
            </div>
        </div>
    )
}

export default AppWordSlider;