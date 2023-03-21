import React from "react";
import {
    Context,
    TableCellDay, TableCellHeader,
    TableCellHours
} from "./HoursSection.styles";
import {Paper, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";


const HoursSection: React.FC = () => {
    return (
        <Context id="hours">

            <TableContainer sx={{ maxWidth: "md" }} component={Paper}>
                <Table>
                    <TableHead>

                        <TableRow>
                            <TableCellHeader colSpan={2}>
                                Unsere Öffnungszeiten
                            </TableCellHeader>
                        </TableRow>

                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCellDay>
                                Montag
                            </TableCellDay>
                            <TableCellHours>
                                12:00 - 14:30 <br />
                                17:00 - 22:00
                            </TableCellHours>
                        </TableRow>

                        <TableRow>
                            <TableCellDay>
                                Dienstag
                            </TableCellDay>
                            <TableCellHours>
                                12:00 - 14:30 <br />
                                17:00 - 22:00
                            </TableCellHours>
                        </TableRow>

                        <TableRow>
                            <TableCellDay>
                                Mittwoch
                            </TableCellDay>
                            <TableCellHours>
                                RUHETAG <br />
                                RUHETAG
                            </TableCellHours>
                        </TableRow>

                        <TableRow>
                            <TableCellDay>
                                Donnerstag
                            </TableCellDay>
                            <TableCellHours>
                                12:00 - 14:30 <br />
                                17:00 - 22:00
                            </TableCellHours>
                        </TableRow>

                        <TableRow>
                            <TableCellDay>
                                Freitag
                            </TableCellDay>
                            <TableCellHours>
                                12:00 - 14:30 <br />
                                17:00 - 22:00
                            </TableCellHours>
                        </TableRow>

                        <TableRow>
                            <TableCellDay>
                                Samstag
                            </TableCellDay>
                            <TableCellHours>
                                12:00 - 14:30 <br />
                                17:00 - 22:00
                            </TableCellHours>
                        </TableRow>

                        <TableRow>
                            <TableCellDay>
                                Sonntag
                            </TableCellDay>
                            <TableCellHours>
                                12:00 - 14:30 <br />
                                17:00 - 22:00
                            </TableCellHours>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>

        </Context>
    );
}


export default HoursSection;
