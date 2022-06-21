import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Divider, Grid } from '@material-ui/core';

import { ExpenseTrackerContext } from '../../context/context';

import useStyles from './mainStyles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';

const Main = () => {
    const classes = useStyles();

    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align='left' variant="h5">
                    Total Balance : Rs.{balance}
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    <InfoCard />
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>

            <CardContent className={classes.cartContent}>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main;