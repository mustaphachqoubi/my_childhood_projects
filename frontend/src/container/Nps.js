import React from 'react'
import { Card, CardHeader, IconButton } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {Bar} from 'react-chartjs-2';
import { makeStyles } from '@mui/styles';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [65, 59, 80, 81, 56],
    }
  ]
}

const useStyles = makeStyles({
  card: {
    width: "50vh",
  }
})

const Nps = () => {
  const classes = useStyles();

  return (
      <div >
        <Card className={classes.card} sx={{ boxShadow: 1 }}>
            <CardHeader
                action={
                    <IconButton aria-label="like" sx={{background: "#ED5F49", color: 'white'}}>
                      <ThumbUpIcon/>
                    </IconButton>
                }
                className={classes.action}
                titleTypographyProps={{color: "black", fontWeight: "bold", align: "left"}}
                title="NPS"
                subheaderTypographyProps={{color: "gray", fontWeight: "430", align: "left"}}
                subheader="48"
            />
            <div style={{ }}>
              <Bar data={state} />
            </div>
        </Card>
      </div>
  )
}

export default Nps