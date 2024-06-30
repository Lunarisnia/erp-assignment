"use client";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import WorkerForm from '../components/WorkerForm';
import LoginForm from "../components/LoginForm";

import "bootstrap/dist/css/bootstrap.min.css";


export default function HomePage() { 
  return (
    <React.Fragment>
      <Head>
        <title>Karyawan Login</title>
      </Head>
    </React.Fragment>
  )
}
