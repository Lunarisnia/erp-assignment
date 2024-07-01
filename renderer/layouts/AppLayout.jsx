import Sidebar from "../components/Sidebar";
import {CalendarMonthOutlined, Newspaper, Person, Timer} from "@mui/icons-material";
import React, {useState} from "react";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "bootstrap/dist/css/bootstrap.min.css";


export default function AppLayout({children}) {
    const [open, setOpen] = useState(false);

    const handleDrawer = () => {
        setOpen(!open);
    }

    return (
        <div>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer}
                        edge="start"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Employee Management System
                    </Typography>
                    <Button></Button>
                </Toolbar>
            </AppBar>
            <Sidebar open={open} onToggle={handleDrawer} menus={[
                {
                    icon: (<Person/>),
                    route: "/dashboard/user",
                    text: "Karyawan"
                },
                {
                    icon: (<CalendarMonthOutlined/>),
                    route: "/dashboard/attendance",
                    text: "Absensi"
                },
                {
                    icon: (<Newspaper/>),
                    route: "/dashboard/work-permit",
                    text: "Izin Kerja"
                },
                {
                    icon: (<Timer/>),
                    route: "/dashboard/leave",
                    text: "Cuti"
                }
            ]}/>
            <div style={{marginTop: 80, marginLeft: 120}}>
                {children}
            </div>
        </div>
    )
}