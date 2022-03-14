import React from 'react'
import { Card, CardHeader, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import { makeStyles } from '@mui/styles';
import PolarChart from '../container/PolarChart';
import LineChart from '../container/LineChart';

const useStyles = makeStyles({
    card: {
        padding: '1rem 1rem',
        margin: "8rem 6rem"
    },
    donuts:{
        display: "flex",
        justifyContent: "space-around"
    }
  })

const CardTwo = () => {
    const classes = useStyles();
  return (
    <Card className={classes.card} >
        <CardHeader
            action={
                <IconButton aria-label="settings" sx={{background: "#F8B42D", color: "white"}}>
                <SettingsIcon />
                </IconButton>
            }
            titleTypographyProps={{color: "black7", fontSize: "30px", fontWeight: "bold" }}
            title="GLOBAL TOPIC SENTIMENT ANALYSIS"
        />
            <div className={classes.donuts}>
                <PolarChart/>
                <LineChart />
            </div>
    </Card>
  )
}

export default CardTwo