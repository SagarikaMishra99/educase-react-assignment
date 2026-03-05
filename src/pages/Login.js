import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div className="card">
            <h1 className="page-title">
                Signin to your
                <br />
                PopX account
            </h1>
            <p className="page-subtitle" style={{ marginBottom: "30px" }}>
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit,
            </p>

            <div className="input-group">
                <label htmlFor="login-email">Email Address</label>
                <input
                    type="email"
                    id="login-email"
                    placeholder="Enter email address"
                />
            </div>

            <div className="input-group">
                <label htmlFor="login-password">Password</label>
                <input
                    type="password"
                    id="login-password"
                    placeholder="Enter password"
                />
            </div>

            <button
                id="login-submit-btn"
                className="login-btn"
                onClick={() => navigate("/account")}
                style={{ marginTop: "10px" }}
            >
                Login
            </button>
        </div>
    );
}

export default Login;