import React from 'react'
import { Card, CardHeader, CardContent, IconButton } from '@mui/material'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { Doughnut } from 'react-chartjs-2';
import { makeStyles } from '@mui/styles';

const state = {
  labels: ['January', 'February'],
  datasets: [
    {
      backgroundColor: [
        'rgba(75,192,192,1)',
        'rgba(55,162,182,1)',
      ],
      hoverBackgroundColor: [
      'rgba(75,192,192,1)',
      'rgba(55,162,182,1)',
      ],
      data: [65, 59]
    }
  ]
}

const config = {
  options: {
    responsive: true,
  },
};

const useStyles = makeStyles({
  card: {
    width: "50vh",
  },
})

const Ts = () => {
  const classes = useStyles();

  return (
      <div >
        <Card className={classes.card} sx={{ boxShadow: 1 }}>
            <CardHeader
                action={
                    <IconButton aria-label="like" sx={{background: "#ED5F49", color: 'white'}}>
                      <InsertEmoticonIcon />
                    </IconButton>
                }
                titleTypographyProps={{color: "black", fontWeight: "bold", align: "left"}}
                title="TS+S"
                subheaderTypographyProps={{color: "gray", fontWeight: "430", align: "left"}}
                subheader="92%"
            />
            <div style={{ position: "relative", margin: "auto", width: "40vh" }}>
              <Doughnut data={state} options={config}/>
            </div>
        </Card>
      </div>
  )
}

export default Ts