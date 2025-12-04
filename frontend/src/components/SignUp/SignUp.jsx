import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import client from '../../api/client';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);
        try {
            const { data } = await client.post('/auth/register', { username: name, email, password });
            if (data && data.message === 'User registered successfully') {
                localStorage.setItem('userName', name);
                localStorage.setItem('userEmail', email);
                window.location.href = '/signin';
            } else {
                setError(data?.message || 'Unexpected response from server');
            }
        } catch (err) {
            setError(err.message || 'Failed to create account. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <div className="signup-header">
                    <div className="signup-logo">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 11l3 3L22 4"></path>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span>TODO</span>
                    </div>
                    <h1>Create your account</h1>
                    <p>Join thousands getting more done every day</p>
                </div>

                {error && <div className="signup-error">{error}</div>}

                <form className="signup-form" onSubmit={handleSubmit}>
                    <label className="input-label" htmlFor="name">Name</label>
                    <div className="input-field">
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            required
                        />
                    </div>

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

                    <label className="input-label" htmlFor="confirm">Confirm Password</label>
                    <div className="input-field">
                        <input
                            id="confirm"
                            type={showPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            minLength={6}
                        />
                    </div>

                    <div className="signup-actions">
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Creating…' : 'Create Account'}
                        </button>
                        <Link to="/signin" className="btn btn-secondary">Sign In</Link>
                    </div>

                    <p className="password-hint">Use 8+ characters with a mix of letters and numbers.</p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
