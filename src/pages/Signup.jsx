import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [isAgency, setIsAgency] = useState("yes");

    return (
        <div className="card">
            <h1 className="page-title">
                Create your
                <br />
                PopX account
            </h1>

            <div style={{ marginTop: "15px" }}>
                <div className="input-group">
                    <label htmlFor="signup-fullname">
                        Full Name<span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="signup-fullname"
                        placeholder="Marry Doe"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="signup-phone">
                        Phone number<span className="required">*</span>
                    </label>
                    <input
                        type="tel"
                        id="signup-phone"
                        placeholder="Marry Doe"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="signup-email">
                        Email address<span className="required">*</span>
                    </label>
                    <input
                        type="email"
                        id="signup-email"
                        placeholder="Marry Doe"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="signup-password">
                        Password<span className="required">*</span>
                    </label>
                    <input
                        type="password"
                        id="signup-password"
                        placeholder="Marry Doe"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="signup-company">Company name</label>
                    <input
                        type="text"
                        id="signup-company"
                        placeholder="Marry Doe"
                    />
                </div>

                <div className="radio-group">
                    <span className="radio-label-text">
                        Are you an Agency?<span className="required">*</span>
                    </span>
                    <div className="radio-options">
                        <label className="radio-option">
                            <input
                                type="radio"
                                name="agency"
                                value="yes"
                                checked={isAgency === "yes"}
                                onChange={() => setIsAgency("yes")}
                            />
                            <span>Yes</span>
                        </label>
                        <label className="radio-option">
                            <input
                                type="radio"
                                name="agency"
                                value="no"
                                checked={isAgency === "no"}
                                onChange={() => setIsAgency("no")}
                            />
                            <span>No</span>
                        </label>
                    </div>
                </div>
            </div>

            <button
                id="signup-submit-btn"
                className="primary-btn"
                onClick={() => navigate("/account")}
                style={{ marginTop: "auto" }}
            >
                Create Account
            </button>
        </div>
    );
}

export default Signup;
