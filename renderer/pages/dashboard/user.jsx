import {Button, Grid, Typography} from "@mui/material";
import DynamicTable from "../../components/DynamicTable";
import {useEffect, useState} from "react";
import axios from "axios";

export default function UserPage() {
    const [users, setUsers] = useState([]);

    useEffect(async () => {
            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
            const res = await axios.get(`${backendUrl}/user`)
            setUsers(res.data.map(u => (
                {
                    "Name": u.name,
                    "Role": u.role,
                    "Email": u.email,
                }
            )));
        },
        []);


    const onAddWorker = () => {

    }

    return (
        <Grid container spacing={1} direction="column">
            <Grid item>
                <Button variant="contained" onClick={onAddWorker}>
                    Add Worker
                </Button>
            </Grid>
            <br/>
            <Typography>List Karyawan</Typography>
            <Grid item>
                <DynamicTable head={["Name", "Role", "Email"]} body={users}/>
            </Grid>
        </Grid>
    )
}