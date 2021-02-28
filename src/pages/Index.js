import { makeStyles } from '@material-ui/core';
import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Table from '../components/BrandingTable'
import Footer from '../components/Footer'
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F7F8FB',
        color: '#5A5C69',
        margin: 0,
        padding: 0
    },
}));

export default function Index() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar name={'Navitar'} />
            <Header name={'Veículos'} />
            <Table />
            <Footer />
        </div>
    )
}

//Cabeçalho do card: #F8F9FC
//Sombra do card e cabeçalho: rgba(58, 59, 69, .15)
//Bordas da tabela: #E3E6F0