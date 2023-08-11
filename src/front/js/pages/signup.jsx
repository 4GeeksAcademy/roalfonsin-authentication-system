import React, { useState } from "react";

export function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
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
        </div>
    );
}