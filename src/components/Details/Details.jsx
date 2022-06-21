import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useTransactions from '../../useTransactions';
import useStyles from './detailsStyles';

const Details = ({ title }) => {
    const classes = useStyles();

    const { total, chartData } = useTransactions(title);

    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant='h5' style={{ textAlign: 'center' }}>
                    {total === 0 ? 'No Transactions' : `Total ${title} : Rs.${total}`}
                </Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card >
    );
}

export default Details;