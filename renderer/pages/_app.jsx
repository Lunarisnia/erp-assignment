import AppLayout from "../layouts/AppLayout";
import Sidebar from "../components/Sidebar";
import {AcUnit} from "@mui/icons-material";
import React from "react";
import {Box, Drawer, List} from "@mui/material";

export default function CustomApp({Component, pageProps}) {
    return (
        <Box style={{display: 'flex'}}>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </Box>
    )
}