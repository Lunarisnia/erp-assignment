import {Typography} from "@mui/material";
import DynamicForm from "../../components/DynamicForm";
import {useRouter} from "next/router";
import axios from "axios";

export default function ClockIn() {
    const router = useRouter()
    const onSubmit = async (result) => {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        await axios.post(`${backendUrl}/attendance`, {
            ...result,
            "clock_in": new Date().toISOString(),
        })
        router.push("/dashboard/attendance")
    }
    const onCancel = () => {
        router.push("/dashboard/attendance")
    }

    return (
        <>
            <Typography>Clock In</Typography>
            <DynamicForm forms={["Name"]} onCancel={onCancel} onSubmit={onSubmit}/>
        </>
    )
}