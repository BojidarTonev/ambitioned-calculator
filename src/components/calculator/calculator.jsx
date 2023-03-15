import React from 'react';
import {ResultDisplay} from "../result-display/result-display";
import {CalculatorButtons} from "../calculator-buttons/calculator-buttons";
import {buildNewInputValue} from "../../utils";

const buttonValues = [
    [{text: '+', color: 'background-operation-button'}, {text: '-',  color: 'background-operation-button'}, {text: '/',  color: 'background-operation-button'}, {text: '*',  color: 'background-operation-button'}],
    [{text: '(',  color: 'background-operation-button'}, {text: ')',  color: 'background-operation-button'}, {text: 'C',  color: 'background-button-delete'}, {text: '=',  color: 'background-button-result'}],
    [{text: 1}, {text: 2}, {text: 3}],
    [{text: 4}, {text: 5}, {text: 6}],
    [{text: 7}, {text: 8}, {text: 9}],
    [{text: '⌫', color: 'background-button-delete'}, {text: 0}, {text: '.', color: 'background-operation-button'}]
];

export const Calculator = ({onResult}) => {
    const [inputValue, setInputValue] = React.useState('0');
    const [error, setError] = React.useState('');

    const onButtonClicked = (e) => {
        const value = e.currentTarget.textContent;
        if(value === '=') {
            setError('');
            let result;
            try {
                result = eval(inputValue);
            } catch (err) {
                return setError('Invalid equation!');
            }

            onResult(`${inputValue}=${result}`);
            setInputValue('0');

            return;
        }
        setInputValue(buildNewInputValue(inputValue, value));
    }

    return(<div>
        {error}
        <ResultDisplay inputValue={inputValue} />
        <CalculatorButtons buttonValues={buttonValues} onButtonClick={onButtonClicked} />
    </div>)
}