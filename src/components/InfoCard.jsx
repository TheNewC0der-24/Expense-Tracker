import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%', color: '#3f51b5', fontSize: 'small' }}>
            <strong>Try saying :</strong> Add {isIncome ? 'Income' : 'Expense'} for Rs.{Math.floor(Math.random() * 100)} in Category {isIncome ? 'Business' : 'Bills'} for {isIncome ? 'Monday' : 'Tuesday'}
        </div >
    )
}

export default InfoCard;