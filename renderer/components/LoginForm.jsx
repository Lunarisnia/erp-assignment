"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function LoginForm() {
    return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
                    <div className="container my-5 mb-3">
                        <h3 style={{ color: 'blue' }}>Login To Your Account</h3>
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="input-username">Username</label>
                                <input type="email" className="form-control" id="input-username" aria-describedby="emailHelp" placeholder=""></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-password">Password</label>
                                <input type="password" className="form-control" id="input-password" placeholder=""></input>
                            </div>
                            <div className="form-group form-check">
                            </div>
                            <div className="d-flex">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}