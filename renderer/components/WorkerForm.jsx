"use client";
import React from "react";
import Link from "next/link";
import  button  from "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function WorkerForm() {

    return (
        <React.Fragment>
            <form> 
                <div className="form-new-worker">
                    <div className="mb-3">
                        <label htmlFor="inputUserName">Nama</label>
                        <input type="text" className="form-control" id="inputUserName" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputJabatan">Jabatan</label>
                        <input type="text" className="form-control" id="inputJabatan" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="" />
                    </div>
                </div>
                <div class="button-group">
                <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-secondary">Cancel</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
}
