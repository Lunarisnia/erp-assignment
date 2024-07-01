import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Grid, Typography} from "@mui/material";
import DynamicTable from "../../components/DynamicTable";

export default function Leave() {
    const router = useRouter()
    const [leaves, setLeaves] = useState([])
    useEffect(() => {
        async function wp() {
            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
            const wps = await axios.get(`${backendUrl}/leave`);
            setLeaves(wps.data.map(a => {
                return {
                    "Name": a.name,
                    "Reason": a.reason,
                    "Start Date": a.start_date,
                    "End Date": a.end_date,
                }
            }))
        }

        wp()
    }, []);

    const onLeave = () => {
        router.push("/admin/request-leave");
    }

    return (
        <Grid container spacing={1} direction="column">
            <Grid item>
                <Button variant="contained" onClick={onLeave}>
                    Ajukan Cuti
                </Button>
            </Grid>
            <br/>
            <Typography>List Cuti</Typography>
            <Grid item>
                <DynamicTable head={["Name", "Reason", "Start Date", "End Date"]} body={leaves}/>
            </Grid>
        </Grid>
    );
}