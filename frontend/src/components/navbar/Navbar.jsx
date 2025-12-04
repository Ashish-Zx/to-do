import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const { pathname } = useLocation();
    const isActive = (path) => (pathname === path ? "navbar-link active" : "navbar-link");
    return (
        <nav className="navbar-custom">
            <div className="navbar-container">
                <Link className="navbar-logo" to="/">
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
                    <span className="navbar-title">TODO</span>
                </Link>

                <div className="navbar-menu">
                    <Link className={isActive("/")} to="/">
                        Home
                    </Link>
                    <Link className={isActive("/about")} to="/about">
                        About
                    </Link>
                </div>

                <div className="navbar-actions">
                    <Link className="navbar-btn btn-signin" to="/signin">
                        Sign In
                    </Link>
                    <Link className="navbar-btn btn-signup" to="/signup">
                        Sign Up
                    </Link>
                    <div className="navbar-user">
                        <Link to="/profile" aria-label="User profile">
                            <img
                                className="navbar-avatar"
                                src="https://ui-avatars.com/api/?name=User&background=4f46e5&color=fff&size=40"
                                alt="user profile"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
