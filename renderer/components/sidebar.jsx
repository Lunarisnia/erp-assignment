import {Drawer} from "@mui/material";
import {useState} from "react";

export default function SideBar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Drawer open={open} variant="permanent" >
                <h1>Hey</h1>
            </Drawer>
        </>
    )
}