import React from 'react';
import { Grid } from '@material-ui/core';
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import Details from './components/Details/Details';
import useStyles from './appStyles';
import Main from './components/Main/Main';

const App = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent='center' style={{ height: '100vh' }} >
                <Grid item xs={12} sm={4} className={classes.mobile} >
                    <Details title='Income' />
                </Grid>

                <Grid item xs={12} sm={3} className={classes.main} >
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.desktop} >
                    <Details title='Income' />
                </Grid>

                <Grid item xs={12} sm={4} >
                    <Details title='Expense' className={classes.last} />
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
            </PushToTalkButtonContainer>
        </div>
    )
}

export default App;