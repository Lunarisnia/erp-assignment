import DynamicForm from "../../components/DynamicForm";
import {useRouter} from "next/router";
import {Typography} from "@mui/material";
import axios from "axios";

export default function AddUserPage() {
    const router = useRouter();

    const onSubmit = async (result) => {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        await axios.post(`${backendUrl}/user`, result)
        router.push("/dashboard/user");
    }

    const onCancel = () => {
        router.push("/dashboard/user");
    }
    return (
        <>
            <Typography>Add Karyawan</Typography>
            <DynamicForm forms={["Name", "Email", "Role", "Password"]} onCancel={onCancel} onSubmit={onSubmit}/>
        </>
    )
}