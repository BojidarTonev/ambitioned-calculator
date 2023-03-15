import React from 'react';
import {CalculatorButton} from "../button/calculator-button";
import './calculator-buttons.scss';

export const CalculatorButtons = ({buttonValues, onButtonClick}) => {
    return(<div className="calculator-wrapper">
        {buttonValues.map((valueRow, idx) => {
            return(<div className="calculator-row" key={`c-r-${idx}`}>
                {valueRow.map((buttonValue, idx) => {
                    const {text, color} = buttonValue;
                    return(<CalculatorButton key={`c-b-${idx}`} text={text} color={color} onClick={onButtonClick} />)
                })}
            </div>)
        })}
    </div>)
}