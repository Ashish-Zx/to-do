import React from 'react';
import './home.css';

function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Organize Your Life,
                        <span className="gradient-text"> One Task at a Time</span>
                    </h1>
                    <p className="hero-description">
                        Stay productive and achieve your goals with our beautiful, intuitive TODO app.
                        Simple, powerful, and designed for people who get things done.
                    </p>
                    <div className="hero-buttons">
                        <a href="/signup" className="btn btn-primary">
                            Get Started Free
                        </a>
                        <a href="/about" className="btn btn-secondary">
                            Learn More
                        </a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <h3>10K+</h3>
                            <p>Active Users</p>
                        </div>
                        <div className="stat-item">
                            <h3>500K+</h3>
                            <p>Tasks Completed</p>
                        </div>
                        <div className="stat-item">
                            <h3>99.9%</h3>
                            <p>Uptime</p>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="floating-card card-1">
                        <div className="task-check">✓</div>
                        <span>Complete project proposal</span>
                    </div>
                    <div className="floating-card card-2">
                        <div className="task-check">✓</div>
                        <span>Design new dashboard</span>
                    </div>
                    <div className="floating-card card-3">
                        <div className="task-check pending">○</div>
                        <span>Team meeting at 3 PM</span>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="section-title">Everything You Need to Stay Organized</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 11l3 3L22 4"></path>
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                            </svg>
                        </div>
                        <h3>Easy Task Management</h3>
                        <p>Create, organize, and track your tasks with an intuitive interface that makes productivity effortless.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <h3>Smart Reminders</h3>
                        <p>Never miss a deadline with intelligent reminders that keep you on track throughout your day.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </div>
                        <h3>Cloud Sync</h3>
                        <p>Access your tasks anywhere, anytime. Your data syncs seamlessly across all your devices.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <h3>Calendar View</h3>
                        <p>Visualize your schedule with a beautiful calendar view that helps you plan ahead effectively.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3>Collaboration</h3>
                        <p>Share tasks and collaborate with your team to achieve goals together more efficiently.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                        </div>
                        <h3>100% Free</h3>
                        <p>All features completely free. No hidden costs, no premium tiers. Just pure productivity.</p>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;