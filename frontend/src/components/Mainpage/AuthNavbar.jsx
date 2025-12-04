import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthNavbar.css';

function AuthNavbar({ userName = 'User' }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to log out?')) {
            localStorage.removeItem('userId');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userName');
            navigate('/');
        }
    };

    return (
        <nav className="auth-navbar">
            <div className="auth-navbar-container">
                <Link className="auth-navbar-logo" to="/main">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 11l3 3L22 4"></path>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <span className="auth-navbar-title">TODO</span>
                </Link>

                <div className="auth-navbar-actions">
                    <div className="auth-user-info">
                        <img
                            className="auth-avatar"
                            src={`https://ui-avatars.com/api/?name=${userName}&background=4f46e5&color=fff&size=40`}
                            alt="user profile"
                        />
                        <span className="auth-user-name">{userName}</span>
                    </div>
                    <button className="auth-btn-logout" onClick={handleLogout}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default AuthNavbar;
