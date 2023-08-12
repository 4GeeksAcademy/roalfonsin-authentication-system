import React, { useState } from "react";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let the_url = "https://musical-bassoon-rjppx99gjg6h59pj-3001.app.github.dev/api/login/"+email+"/"+password;
        fetch(the_url, {
            method: "GET",
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
            <h2>Login</h2>
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
        </div>
    );
}