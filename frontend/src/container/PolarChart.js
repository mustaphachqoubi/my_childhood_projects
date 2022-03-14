import React from 'react'
import { Card, CardHeader} from '@mui/material'
import { makeStyles } from '@mui/styles';

import { PolarArea } from "react-chartjs-2";

const dataHorBar = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      backgroundColor: ["skyblue", "red", "aqua", "green", "orange", "pink", "gray"],
      borderColor: "black",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [70, 60, 50, 40, 30, 20, 10]
    },
    {
      backgroundColor: "white",
      borderColor: "grey",
      borderWidth: 1,
      data: [70, 70, 70, 70, 70, 70, 70]
    }
  ]
};

const useStyles = makeStyles({
  card: {
    width: "50vh",
  }
})

const PolarChart = () => {
  const classes = useStyles();

  return (
      <div >
        <Card className={classes.card} sx={{ boxShadow: 0 }}>
            <CardHeader
                className={classes.action}
                titleTypographyProps={{color: "black", fontWeight: "bold", align: "center"}}
                title="TOPICS TOP 10"
            />
            <PolarArea data={dataHorBar} />
        </Card>
      </div>
  )
}

export default PolarChart