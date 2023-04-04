import {NextPage} from "next";
import {Title} from "@/src/styles/impressum.styles";
import Head from "next/head";
import {Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


const Impressum: NextPage = () => {
    return (
        <Container maxWidth="md">

            <Head>
                <title>Pizzeria Bei Toni | Impressum</title>
            </Head>

            <Title>
                Impressum
            </Title>

            <TableContainer component={Paper}>
                <Table sx={{
                    'td': { fontSize: '1.1rem', width: '50%' },
                    'tr:last-child > td': { border: 'none' }
                }}>
                    <TableHead>

                        <TableRow>
                            <TableCell colSpan={2} sx={{
                                background: theme => theme.palette.primary.main,
                                color: '#ffffff',
                                textAlign: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 'bold'
                            }}>
                                Pizzeria Bei Toni
                            </TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell>Inhaber</TableCell>
                            <TableCell>Antonio Vitale</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Telefon</TableCell>
                            <TableCell>(02973) 451</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Telefax</TableCell>
                            <TableCell>(02973) 979380</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>pizzeriabeitoni57@gmail.com</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Addresse</TableCell>
                            <TableCell>Mathmeckestraße 4, 59889 Eslohe</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Steuer-Nr.</TableCell>
                            <TableCell>334/5102/0283</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    );
}


// noinspection JSUnusedGlobalSymbols
export default Impressum;