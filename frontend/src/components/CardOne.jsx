import React from 'react'
import { Card, CardHeader, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import Nps from '../container/Nps';
import Ts from '../container/Ts';
import Ces from '../container/Ces';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
        padding: '1rem 1rem',
        margin: "8rem 6rem"
    },
    donuts:{
        display: "flex",
        justifyContent: "space-between",
    }
  })

const CardTwo = () => {
    const classes = useStyles();
  return (
    <Card className={classes.card} >
        <CardHeader
            action={
                <IconButton aria-label="settings" sx={{background: "#F8B42D", color: 'white'}}>
                    <SettingsIcon />
                </IconButton>
            }
            titleTypographyProps={{color: "black", fontSize: "30px", fontWeight: "bold" }}
            title="GLOBAL TOPIC SENTIMENT ANALYSIS"
        />
            <div className={classes.donuts} >
                <Nps/>
                <Ts />
                <Ces />
            </div>
    </Card>
  )
}

export default CardTwo