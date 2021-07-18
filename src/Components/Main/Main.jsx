import React from 'react'
import { Card,CardHeader,Typography,Grid,Divider, CardContent} from '@material-ui/core'
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/Lists'
const Main = () => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader title="Expense Tracker" subheader="Personal Project"/>
                <CardContent>
                    <Typography align="center" variant="h5">
                        Total balance 100$
                    </Typography>
                    <Typography variant="subtitle1" style={{lineHeight:'1.5em', marginTop:'20px' }}>
                        Try Saying ....addincome for 100$ in category slaaray for monday
                    </Typography>
                    <Divider/>
                    <Form/>
                </CardContent>
                <CardContent className={classes.cardContent}>
                    <Grid container spacing={2}>
                        <Grid item  xs={12}>
                            <List/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default Main
