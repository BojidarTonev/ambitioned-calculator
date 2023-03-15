import React from 'react';
import './calculator-button.scss';

export const CalculatorButton = ({text, color, onClick}) => {
    const backgroundColorClass = color ? color : 'background-button';

    return(<div className={`button ${backgroundColorClass}`} onClick={(e) => onClick(e)}>
        {text}
    </div>)
}