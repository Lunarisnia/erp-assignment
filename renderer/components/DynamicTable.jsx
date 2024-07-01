import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export default function DynamicTable({head, body}) {
    const heads = head.map((h, i) => (
        <TableCell key={i}>
            {h}
        </TableCell>
    ));

    const bodies = body.map((b, i) => {
        const tcs = [];
        for (const h of head) {
            tcs.push(
                <TableCell>
                    {b[h]}
                </TableCell>)
        }
        return (
            <TableRow key={i}>{tcs}</TableRow>
        )
    })

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {heads}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bodies}
                </TableBody>
            </Table>
        </TableContainer>
    )
}