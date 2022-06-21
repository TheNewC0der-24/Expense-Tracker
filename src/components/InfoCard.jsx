import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            Try saying : <br />
            Add {isIncome ? 'Income' : 'Expense'} for Rs. {Math.floor(Math.random() * 100)} in Category {isIncome ? 'Food' : 'Travel'} for {isIncome ? 'Monday' : 'Tuesday'}
        </div>
    )
}

export default InfoCard;