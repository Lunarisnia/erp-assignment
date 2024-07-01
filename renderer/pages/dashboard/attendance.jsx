import {Button, Grid, Typography} from "@mui/material";
import DynamicTable from "../../components/DynamicTable";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";

export default function AttendancePage() {
    const [attendances, setAttendances] = useState([]);
    useEffect(() => {
        async function att() {
            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
            const atts = await axios.get(`${backendUrl}/attendance?date=${new Date().toISOString()}`);
            setAttendances(atts.data.map(a => {
                return {
                    "Name": a.name,
                    "Clock In": a.clock_in,
                }
            }))
        }

        att()
    }, []);


    const router = useRouter();
    const onClockIn = () => {
        router.push("/admin/clock-in")
    }

    return (
        <Grid container spacing={1} direction="column">
            <Grid item>
                <Button variant="contained" onClick={onClockIn}>
                    Absen
                </Button>
            </Grid>
            <br/>
            <Typography>List Absensi</Typography>
            <Grid item>
                <DynamicTable head={["Name", "Clock In"]} body={attendances}/>
            </Grid>
        </Grid>
    )
}