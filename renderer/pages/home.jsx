"use client";
import React from 'react';
import Head from 'next/head';
import LoginForm from "../components/LoginForm";
import {useRouter} from "next/router";

export default function HomePage() {
    const router = useRouter();
    const onSubmit = () => {
        router.push("/dashboard/home")
    }
    return (
        <React.Fragment>
            <Head>
                <title>Employee Management System</title>
            </Head>
            <LoginForm onSubmit={onSubmit}/>
        </React.Fragment>
    )
}
