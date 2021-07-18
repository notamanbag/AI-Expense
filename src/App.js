import React from 'react';
import {Grid } from '@material-ui/core';
import Details from './Components/Details/details'
import useStyles from './styles'
import Main from './Components/Main/Main';
const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center " style={{height:'100vh'}}>
                <Grid item xs={12} sm={4}>
                    <Details title="Income"/>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Main/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details title="Expense"/>
                </Grid>

            </Grid>
        </div>
    )
}

export default App
