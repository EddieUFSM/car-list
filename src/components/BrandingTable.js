
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
import { getData, getModelos } from '../api'
import { ModelosTabela } from './ModelsTable'


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
    color: '#5A5C69'
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
        boxShadow: "0px 30px 80px rgba(58, 59, 69, .15)",
        color: '#5A5C69',
    },
    tableHeader: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        minWidth: 700,
        boxShadow: "0px 30px 80px rgba(58, 59, 69, .15)",
        backgroundColor: "#F8F9FC",
        borderBottomStyle: 2,
        color: '#5A5C69',

    },
    link: {
        "&:hover": {
            color: '#1CC88A'
        },
        fontWeight: 'bold',

    }
});


export default function CustomizedTables() {
    const classes = useStyles();
    const [marcar, setMarcas] = useState([])
    const [modelos, setModelos] = useState([])
    const [indice, setIndice] = useState(0)
    const [id, setId] = useState(0)

    const init = () => {
        getData().then(data => {
            if (data) {
                setMarcas(data)
            }
        })
    }

    const lodingTable = async (i) => {
        console.log(i)
        await getModelos(i).then(async data => {
            if (data && data.modelos) {
                await setModelos(data.modelos)
                await setIndice(i)
                await setId(i)
            }
        })
    }


    const teste = () => {
        let teste = modelos
        return (<ModelosTabela modelos={teste} />)
    }
    useEffect(() => {
        init();
    }, [])

    return (
        <Container>
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

            <TableContainer component={Paper} style={{
                borderCollapse: 'unset', padding: '20px', width: 'auto', borderTopLeftRadius: 0,
                borderTopLeftRadius: 0,
            }} >
                <Table aria-label="customized table" >
                    <TableHead style={{ borderCollapse: 'collapse', background: 'none', borderTop: '1pt solid rgba(224, 224, 224, 1)' }}>
                        <TableRow >
                            <TableCell colSpan={2} >
                                <Typography variant="h5">
                                    Marca
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
                <Table aria-label="customized table" >
                    <TableBody>
                        {marcar.map((row) => (
                            <StyledTableRow >
                                <StyledTableCell colSpan={1}>{row.nome}</StyledTableCell>
                                <StyledTableCell colSpan={1} align="left">
                                    <Link className={classes.link} component="button" underline='none' color='secondary' key={row.codigo} onClick={(key) => lodingTable(row.codigo)}>Ver modelos</Link>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {
                indice === id && id !== 0 ? teste() : <></>

            }

        </Container >

    );
}