import {useRouter} from "next/router";
import axios from "axios";
import {Typography} from "@mui/material";
import DynamicForm from "../../components/DynamicForm";

export default function NewWork() {
    const router = useRouter()
    const onSubmit = async (result) => {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        await axios.post(`${backendUrl}/work-permit`, {
            name: result.name,
            reason: result.reason,
            start_date: result["start date"],
            end_date: result["end date"],
        })
        router.push("/dashboard/work-permit")
    }
    const onCancel = () => {
        router.push("/dashboard/work-permit")
    }

    return (
        <>
            <Typography>New Work</Typography>
            <DynamicForm forms={["Name", "Reason", "Start Date", "End Date"]} onCancel={onCancel} onSubmit={onSubmit}/>
        </>
    )
}