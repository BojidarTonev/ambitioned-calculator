import React from 'react';
import './calculations-history.scss';

export const CalculationsHistory = ({results, clearHistory}) => {
    return(<div className="calculations-history">
        <h2>CALCULATIONS HISTORY</h2>
        <div className="history-container" data-testid="HistoryContainer">
            {results.map((res, idx) => <div key={`res-item-${idx}`}>{res}</div>)}
        </div>
        <div className="action-button" data-testid="ActionButton" onClick={() => clearHistory()}>CLEAR HISTORY</div>
    </div>)
}