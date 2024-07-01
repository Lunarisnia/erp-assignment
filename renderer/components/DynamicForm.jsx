"use client";
import React, {useState} from "react";
import {Button, TextField, Grid} from "@mui/material";

export default function DynamicForm({forms, onSubmit, onCancel}) {
    const [formResult, setFormResult] = useState({});
    const form = forms.map((f, i) => {
        return (
            <>
                <TextField key={i} label={f} onChange={(event) => {
                    formResult[f.toLowerCase()] = event.target.value;
                    setFormResult(formResult)
                }}>
                    {f}
                </TextField>
                <br/>
            </>
        )
    });

    return (
        <Grid container direction="column" columnSpacing={10}>
            {form}
            <Grid item spacing={2}>
                <Button variant="contained" onClick={() => {
                    onSubmit(formResult);
                }}>
                    Submit
                </Button>
                <Button variant="contained" onClick={onCancel}>
                    Cancel
                </Button>
            </Grid>
        </Grid>
    );
}
