import React from 'react'
import { Container, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        color: " #5A5C69",
        marginTop: 30,
        marginBottom: 30,
        padding: 50
    }
}))

export default function Header(props) {
    const classes = useStyles();

    return (
        <div style={{ marginTop: 30, height: 64, textAlign: 'center', width: "100%", paddingTop: 20, backgroundColor: "#ffffff" }}>


            <Typography variant="body" className={classes.root}>
                Copyright @ Navita 2020
            </Typography>

        </div>

    )
}