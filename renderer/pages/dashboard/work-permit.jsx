import {Button, Grid, Typography} from "@mui/material";
import DynamicTable from "../../components/DynamicTable";
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

export default function WorkPermit() {
    const router = useRouter()
    const [workPermits, setWorkPermits] = useState([])
    useEffect(() => {
        async function wp() {
            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
            const wps = await axios.get(`${backendUrl}/work-permit`);
            setWorkPermits(wps.data.map(a => {
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

    const onNewWork = () => {
        router.push("/admin/new-work");
    }

    return (
        <Grid container spacing={1} direction="column">
            <Grid item>
                <Button variant="contained" onClick={onNewWork}>
                    New Work Permit
                </Button>
            </Grid>
            <br/>
            <Typography>List Work Permit</Typography>
            <Grid item>
                <DynamicTable head={["Name", "Reason", "Start Date", "End Date"]} body={workPermits}/>
            </Grid>
        </Grid>
    );
}