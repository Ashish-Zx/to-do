import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import client from '../../api/client';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { data } = await client.post('/auth/login', { email, password });
            if (data && data.user && data.user._id) {
                localStorage.setItem('userId', data.user._id);
                localStorage.setItem('userEmail', data.user.email);
                if (data.user.username) localStorage.setItem('userName', data.user.username);
                window.location.href = '/main';
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (err) {
            setError(err.message || 'Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-card">
                <div className="signin-header">
                    <div className="signin-logo">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 11l3 3L22 4"></path>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span>TODO</span>
                    </div>
                    <h1>Welcome back</h1>
                    <p>Sign in to continue organizing your tasks</p>
                </div>

                {error && <div className="signin-error">{error}</div>}

                <form className="signin-form" onSubmit={handleSubmit}>
                    <label className="input-label" htmlFor="email">Email</label>
                    <div className="input-field">
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <label className="input-label" htmlFor="password">Password</label>
                    <div className="input-field password-field">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            minLength={6}
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    <div className="signin-actions">
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Signing in…' : 'Sign In'}
                        </button>
                        <Link to="/signup" className="btn btn-secondary">Create account</Link>
                    </div>

                    <div className="signin-meta">
                        <label className="remember">
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link to="/forgot" className="forgot-link">Forgot password?</Link>
                    </div>
                </form>

                <p className="signin-footer">
                    By signing in you agree to our <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy</Link>.
                </p>
            </div>
        </div>
    );
}

export default SignIn;
