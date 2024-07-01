import {useRouter} from "next/router";
import axios from "axios";
import {Typography} from "@mui/material";
import DynamicForm from "../../components/DynamicForm";

export default function DeleteUserPage() {
    const router = useRouter();

    const onSubmit = async (result) => {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        await axios.delete(`${backendUrl}/user/${result}`)
    }

    const onCancel = () => {
        router.push("/dashboard/user");
    }

    return (
        <>
            <Typography>Delete Karyawan</Typography>
            <DynamicForm forms={["Nomor Karyawan", "Alasan"]} onCancel={onCancel} onSubmit={onSubmit}/>
        </>
    )
}