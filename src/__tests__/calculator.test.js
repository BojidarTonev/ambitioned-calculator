import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from '../App';

describe('the 3 main functionality tests', () => {
    test('assure that each click on button of the calculator actually renders in the display section above appropriately', () => {
        render(<App/>);

        const calculatorButtonFive = screen.getByText('5');
        const calculatorResultDisplay = screen.getByTestId('ResultDisplay');

        // assure all the DOM elements are loaded successfully
        expect(calculatorButtonFive).toBeInTheDocument();
        expect(calculatorResultDisplay).toBeInTheDocument();

        fireEvent.click(calculatorButtonFive);

        expect(calculatorResultDisplay).toHaveTextContent('5');
    });

    test('assure that clicking the equal button would actually render the equation present in the result section on the history section', () => {
        render(<App/>);

        const calculatorButtonFive = screen.getByText('5');
        const calculatorButtonEqual = screen.getByText('=');
        const calculatorButtonPlus = screen.getByText('+');
        const calculatorResultDisplay = screen.getByTestId('ResultDisplay');

        // assure everything is rendered correctly
        expect(calculatorButtonFive).toBeInTheDocument();
        expect(calculatorButtonEqual).toBeInTheDocument();
        expect(calculatorButtonPlus).toBeInTheDocument();
        expect(calculatorResultDisplay).toBeInTheDocument();

        // inputting 5+5=
        fireEvent.click(calculatorButtonFive);
        fireEvent.click(calculatorButtonPlus);
        fireEvent.click(calculatorButtonFive);
        fireEvent.click(calculatorButtonEqual);

        expect(screen.getByText("5+5=10")).toBeInTheDocument();
    });

    test('assure that clicking on Clear History button would remove all elements inside History Container', () => {
        render(<App/>);

        const calculatorButtonFive = screen.getByText('5');
        const calculatorButtonEqual = screen.getByText('=');
        const calculatorButtonPlus = screen.getByText('+');
        const calculatorResultDisplay = screen.getByTestId('ResultDisplay');
        const calculatorHistoryContainer = screen.getByTestId('HistoryContainer');
        const historyActionButton = screen.getByTestId('ActionButton');

        // assure everything is rendered correctly
        expect(calculatorButtonFive).toBeInTheDocument();
        expect(calculatorButtonEqual).toBeInTheDocument();
        expect(calculatorButtonPlus).toBeInTheDocument();
        expect(calculatorResultDisplay).toBeInTheDocument();
        expect(calculatorHistoryContainer).toBeInTheDocument();
        expect(historyActionButton).toBeInTheDocument();

        // inputting 5+5=
        fireEvent.click(calculatorButtonFive);
        fireEvent.click(calculatorButtonPlus);
        fireEvent.click(calculatorButtonFive);
        fireEvent.click(calculatorButtonEqual);

        // assure we have 1 equation rendered inside the history
        expect(screen.getByText("5+5=10")).toBeInTheDocument();

        fireEvent.click(historyActionButton);

        expect(screen.queryByText("5+5=10")).not.toBeInTheDocument();
    });
});