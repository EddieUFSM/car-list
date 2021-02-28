import React from 'react'
import { Container, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        color: " #5A5C69",
        marginTop: 30,
        marginBottom: 30
    }
}))

export default function Header(props) {
    const classes = useStyles();

    return (
        <>
            <Toolbar />
            <Container maxWidth='lg'>
                <Typography variant="h4" className={classes.root}>
                    {props.name}
                </Typography>
            </Container>

        </>

    )
}