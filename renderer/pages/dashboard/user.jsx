import {Button, Grid, Typography} from "@mui/material";
import DynamicTable from "../../components/DynamicTable";
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

export default function UserPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
            async function effect() {
                const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
                const res = await axios.get(`${backendUrl}/user`)
                setUsers(res.data.map(u => (
                    {
                        "Nomor Karyawan": u.id,
                        "Name": u.name,
                        "Role": u.role,
                        "Email": u.email,
                    }
                )));
            }

            effect();
        },
        []);


    const router = useRouter();
    const onAddWorker = () => {
        router.push("/admin/add-user")
    }
    const onDeleteWorker = () => {
        router.push("/admin/delete-user")
    }

    return (
        <Grid container spacing={1} direction="column">
            <Grid item>
                <Button variant="contained" onClick={onAddWorker}>
                    Add Worker
                </Button>
                <Button variant="contained" onClick={onDeleteWorker}>
                    Delete Worker
                </Button>
            </Grid>
            <br/>
            <Typography>List Karyawan</Typography>
            <Grid item>
                <DynamicTable head={["Nomor Karyawan", "Name", "Role", "Email"]} body={users}/>
            </Grid>
        </Grid>
    )
}