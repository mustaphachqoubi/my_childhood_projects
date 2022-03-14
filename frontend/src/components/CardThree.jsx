import React from 'react'
import { Card, CardHeader, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import { makeStyles } from '@mui/styles';
import RadarOne from '../container/RadarOne';
import RadarTwo from '../container/RadarTwo';

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

const CardThree = () => {
    const classes = useStyles();
  return (
    <Card className={classes.card} >
        <CardHeader
            action={
                <IconButton aria-label="settings" sx={{background: "#F8B42D", color: "white"}}>
                <SettingsIcon/>
                </IconButton>
            }
            titleTypographyProps={{color: "black", fontSize: "30px", fontWeight: "bold" }}
            title="GLOBAL TOPIC TRENDS ANALYSIS"
        />
            <div className={classes.donuts}>
                <RadarOne/>
                <RadarTwo />
            </div>
    </Card>
  )
}

export default CardThree