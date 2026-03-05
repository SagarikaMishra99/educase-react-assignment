import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    return (
        <div className="card">
            <div style={{ flex: 1 }}></div>
            <h1 className="page-title">Welcome to PopX</h1>
            <p className="page-subtitle">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit,
            </p>

            <button
                id="create-account-btn"
                onClick={() => navigate("/signup")}
                className="primary-btn"
                style={{ marginBottom: "12px" }}
            >
                Create Account
            </button>

            <button
                id="login-btn"
                onClick={() => navigate("/login")}
                className="secondary-btn"
                style={{ marginBottom: "10px" }}
            >
                Already Registered? Login
            </button>
        </div>
    );
}

export default Welcome;