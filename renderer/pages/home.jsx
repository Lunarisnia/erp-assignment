"use client";
import React, {useState} from 'react';
import Head from 'next/head';

import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar";
import {AcUnit} from "@mui/icons-material";
import {Button} from "@mui/material";


export default function HomePage() {
    const [open, setOpen] = useState(false);

    const handleSidebar = () => {
        setOpen(!open);
    }

    return (
        <React.Fragment>
            <Head>
                <title>Employee Management System</title>
            </Head>
            <Sidebar open={open} onClose={handleSidebar} menus={[
                {
                    icon: (<AcUnit/>),
                    route: "/dashboard/user",
                    text: "User"
                }
            ]}/>
        </React.Fragment>
    )
}
