import React, { Component } from 'react'
import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 30px 80px rgba(58, 59, 69, .15)"
    },

}))

export default function NavBar(props) {
    const classes = useStyles();

    return (
        <AppBar className={classes.navbar}>
            <Container maxWidth='lg'>
                <Toolbar>
                    <Typography variant="h6" color='primary'>
                        {props.name}
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}