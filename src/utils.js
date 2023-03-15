// It will check single characters, as well as whole strings to see if they are numeric.
export const isNumeric = (str) => {
    return /^\d+$/.test(str);
};

const mathOperations = ['/', '+', '-', '*'];

export const buildNewInputValue = (currentInput, newChar) => {
    const lastCurrentInputChar = currentInput[currentInput.length - 1];

    if(newChar === '(') {
        if(currentInput.length === 1 && lastCurrentInputChar == 0) return newChar;
        if(isNaN(lastCurrentInputChar) && lastCurrentInputChar !== ')') {
            return currentInput + newChar;
        }
    } else if (newChar === ')') {
        const numberOfOpeningBrackets = currentInput.replace(/[^(]/g, "").length
        const numberOfClosingBrackets = currentInput.replace(/[^)]/g, "").length

        if(numberOfOpeningBrackets > numberOfClosingBrackets && lastCurrentInputChar !== '(') {
            return currentInput + newChar;
        }
    } else if (newChar === '⌫') {
        if(currentInput.length === 1) return '0';
        else if (currentInput.length > 1) {
            return currentInput.slice(0, -1);
        }
    } else if (newChar === 'C') {
        return '0';
    } else if (newChar === '.') {
        // below we modify the current value number, so that no invalid number could be provided based on the decimal point
        if(lastCurrentInputChar !== '.' && !/\b\d+\.\d+(?:\.\d+)+\b/.test(currentInput + newChar + 1)) {
            return currentInput + newChar;
        }
    } else if (isNumeric(newChar)) {
        if(currentInput.length === 1 && lastCurrentInputChar == 0) return newChar;
        return currentInput + newChar
    } else {
        // newChar === '*' || newChar === '/' || newChar === '+' || newChar === '-'
        if(!mathOperations.filter((operation) => operation === lastCurrentInputChar).length > 0) {
            return currentInput + newChar;
        }
    }

    return currentInput;
}