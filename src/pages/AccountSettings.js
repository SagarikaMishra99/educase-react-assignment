import React from "react";

function AccountSettings() {
    return (
        <div className="card" style={{ padding: 40, background: "#F7F8F9" }}>
            {/* Header */}
            <div className="profile-header">
                <h2>Account Settings</h2>
            </div>

            {/* Profile Info */}
            <div style={{ padding: "0 25px" }}>
                <div className="profile-section">
                    <div className="profile-avatar-wrapper">
                        <img
                            src="https://i.pravatar.cc/150?img=47"
                            alt="Marry Doe"
                        />
                        <div className="camera-icon">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z" />
                                <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                            </svg>
                        </div>
                    </div>
                    <div className="profile-info">
                        <h3>Marry Doe</h3>
                        <p>Marry@Gmail.Com</p>
                    </div>
                </div>

                {/* Bio */}
                <div className="profile-bio">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                    Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
                    Erat, Sed Diam
                </div>
            </div>
        </div>
    );
}

export default AccountSettings;