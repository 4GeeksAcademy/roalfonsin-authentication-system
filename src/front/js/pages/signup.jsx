import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alertClass, setAlertClass] = useState("invisible");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let the_url = "https://animated-lamp-gg77p99q9jw3pgr9-3001.app.github.dev/api/signup/"+email+"/"+password;
        fetch(the_url, {
            method: "POST",
            })
            .then((response) => {
                if (response.status == 200){
                    console.log("user created");
                    navigate("/login");
                }
                else{
                    console.log("user was not created");
                    setAlertClass("visible");
                }
            });
        };

    return (
        <div className="container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label className="form-label"> Email: </label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label"> Password: </label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
            </form>
            <h5 className = {alertClass}>User already exist</h5>
        </div>
    );
}