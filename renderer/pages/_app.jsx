import AppLayout from "../layouts/AppLayout";
import Sidebar from "../components/Sidebar";
import {AcUnit} from "@mui/icons-material";
import React from "react";
import {Box, Drawer, List} from "@mui/material";
import {useRouter} from "next/router";
import Head from "next/head";

export default function CustomApp({Component, pageProps}) {
    const router = useRouter();
    if (router.pathname === "/home") {
        return (
            <Box style={{display: 'flex'}}>
                <Component {...pageProps} />
            </Box>
        )
    }
    return (
        <>
            <Head>
                <title>Employee Management System</title>
            </Head>
            <Box style={{display: 'flex'}}>
                <AppLayout>
                    <Component {...pageProps} />
                </AppLayout>
            </Box>
        </>
    )
}