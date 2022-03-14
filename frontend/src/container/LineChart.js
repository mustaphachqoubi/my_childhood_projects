import React from 'react'
import { Card, CardHeader} from '@mui/material'
import { makeStyles } from '@mui/styles';
import Chart from 'chart.js/auto'
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 40, 80, 21, 56]
    }
  ]
}

const useStyles = makeStyles({
  card: {
    width: "50vh",
  }
})

const LineChart = () => {
  const classes = useStyles();

  return (
      <div >
        <Card className={classes.card} sx={{ boxShadow: 0 }}>
            <CardHeader
                className={classes.action}
                titleTypographyProps={{color: "black", fontWeight: "bold", align: "center"}}
                title="INTERTOPICS DISTANCE MAP"
            />
            <Line data={state}/>
        </Card>
      </div>
  )
}

export default LineChart