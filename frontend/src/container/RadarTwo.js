import React from 'react'
import { Card, CardHeader} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Radar } from "react-chartjs-2";

const dataHorBar = {
  labels: ["January", "February", "March", "May", "June", "July"],
  datasets: [
    {
      backgroundColor: ["skyblue", "red", "aqua", "orange", "pink", "gray"],
      borderColor: "black",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [30, 60, 50, 40, 20, 10]
    },
    {
      backgroundColor: "white",
      borderColor: "grey",
      borderWidth: 1,
      data: [70, 30, 70, 70, 2, 70, 70]
    }
  ]
};

const useStyles = makeStyles({
  card: {
    width: "50vh",
  }
})

const RadarTwo = () => {
  const classes = useStyles();

  return (
      <div >
        <Card className={classes.card} sx={{ boxShadow: 0 }}>
            <CardHeader
                className={classes.action}
                titleTypographyProps={{color: "black", fontWeight: "bold", align: "center"}}
                title="TOPIC POLARITY TOP 10"
            />
            <Radar data={dataHorBar} />
        </Card>
      </div>
  )
}

export default RadarTwo