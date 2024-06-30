"use client";
import React, {useState} from 'react';
import Head from 'next/head';

import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar";
import {AcUnit} from "@mui/icons-material";
import {Button} from "@mui/material";


export default function HomePage() {
    return (
        <React.Fragment>
            <Head>
                <title>Employee Management System</title>
            </Head>
            <Sidebar menus={[
                {
                    icon: (<AcUnit/>),
                    route: "/dashboard/user",
                    text: "User"
                }
            ]}/>
        </React.Fragment>
    )
}
