import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Link from '@material-ui/core/Link'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core';
import { getData } from '../api'


const StyledTableCell = withStyles(() => ({
    head: {
        backgroundColor: "#F8F9FC",
        color: "#5A5C69"
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
}))(TableRow);

const useStyles = makeStyles({
    table: {
        borderColor: "#E3E6F0",
        minWidth: 700,
        boxShadow: "0px 30px 80px rgba(58, 59, 69, .15)"
    },
    tableBody: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        minWidth: 700,
        boxShadow: "0px 30px 80px rgba(58, 59, 69, .15)"
    },
    tableHeader: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        minWidth: 700,
        boxShadow: "0px 30px 80px rgba(58, 59, 69, .15)",
        backgroundColor: "#F8F9FC",
        borderBottomStyle: 2,
        marginTop: 50

    },
    link: {
        "&:hover": {
            color: '#1CC88A'
        },
        fontWeight: 'bold',

    }
});

export const ModelosTabela = (props) => {
    const classes = useStyles()
    const [modelos, setModelos] = useState([props.modelos])

    console.log(modelos)

    return (
        <>
            <TableContainer component={Paper} className={classes.tableHeader}>
                <Table aria-label="customized table" >
                    <TableHead style={{ borderCollapse: 'collapse' }}>
                        <TableRow >
                            <StyledTableCell colSpan={2}>
                                <Typography color="primary" variant="h6">
                                    Marca
                                </Typography>

                            </StyledTableCell>

                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>

            <TableContainer component={Paper} style={{ borderCollapse: 'unset', padding: '20px', width: 'auto' }} className={classes.tableBody}>
                <Table aria-label="customized table" >
                    <TableBody>

                        {modelos[0].map((row) => {

                            return (


                                <StyledTableRow >
                                    <StyledTableCell colSpan={1}>{row.nome}</StyledTableCell>

                                </StyledTableRow>
                            )

                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
