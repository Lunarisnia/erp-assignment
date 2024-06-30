import Sidebar from "../components/Sidebar";
import {AcUnit} from "@mui/icons-material";
import React, {useState} from "react";
import {AppBar, Box, Container, IconButton, styled, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


export default function AppLayout({children}) {
    const [open, setOpen] = useState(false);

    const handleDrawer = () => {
        setOpen(!open);
    }

    return (
        <Box style={{display: 'flex'}}>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Employee Management System
                    </Typography>
                </Toolbar>
            </AppBar>
            <Sidebar open={open} onToggle={handleDrawer} menus={[
                {
                    icon: (<AcUnit/>),
                    route: "/dashboard/user",
                    text: "User"
                }
            ]}/>
            {children}
        </Box>
    )
}