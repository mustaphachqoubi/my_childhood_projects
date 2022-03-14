import React from 'react'
import { Card, CardHeader, IconButton } from '@mui/material'
import TvIcon from '@mui/icons-material/Tv';
import {Line} from 'react-chartjs-2';
import { makeStyles } from '@mui/styles';


const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      fill: true,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const useStyles = makeStyles({
  card: {
    width: "50vh",
  },
})

const Ces = () => {
  const classes = useStyles();

  return (
      <div >
        <Card className={classes.card} sx={{ boxShadow: 1 }}>
            <CardHeader
                action={
                    <IconButton aria-label="tv" sx={{background: "#ED5F49", color: 'white'}}>
                      <TvIcon />
                    </IconButton>
                }
                titleTypographyProps={{color: "black", fontWeight: "bold", align: "left"}}
                title="CES"
                subheaderTypographyProps={{color: "gray", fontWeight: "430", align: "left"}}
                subheader="65"
            />
              <Line data={state}/>
        </Card>
      </div>
  )
}

export default Ces