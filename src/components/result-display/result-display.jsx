import React from 'react';
import './result-display.scss';

export const ResultDisplay = ({inputValue}) => {
    return(<div className="calculator-input" data-testid="ResultDisplay">
        {inputValue}
    </div>)
}