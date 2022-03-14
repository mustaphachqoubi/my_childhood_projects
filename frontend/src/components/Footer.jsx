import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react'
import { makeStyles } from '@mui/styles';
import CopyrightIcon from '@mui/icons-material/Copyright';

const useStyles = makeStyles({
    footer:{
        position: "absolute",
        bottom: 0,
        width: "100%",
        background: "white",
        display: "flex"
    }
})

const Footer = () => {
    const classes = useStyles()
  return (
    <div>
        <BottomNavigation
          showLabels
          className={classes.footer}
        >
          <BottomNavigationAction icon={<CopyrightIcon/>} label="Attijariwafa bank" style={{fontWeight: "bold"}}  />
        </BottomNavigation>
    </div>
  )
}

export default Footer