import { makeStyles } from '@mui/styles';
import React from 'react'
import CardOne from '../components/CardOne';
import CardTwo from '../components/CardTwo';
import CardThree from '../components/CardThree';
import Footer from '../components/Footer';

const useStyles = makeStyles({
    page: {
        background: "#f9f9f9",
        textAlign: 'center',
        width: "100%",
        height: "300vh",
        position: "absolute",
        left: 0
    }
})

const Layout = () => {

    const classes = useStyles();

  return (
    <div className={classes.page}>
        <CardOne/>
        <CardTwo />
        <CardThree />
        <Footer />
    </div>
  )
}

export default Layout