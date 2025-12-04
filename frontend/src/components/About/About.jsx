import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1 className="about-title">
                        About <span className="gradient-text">TODO</span>
                    </h1>
                    <p className="about-subtitle">
                        Empowering you to achieve more, one task at a time
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="about-section">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Our Mission</h2>
                        <p>
                            We believe that everyone deserves a simple, powerful tool to organize their life.
                            TODO was created to help people focus on what matters most by eliminating the
                            complexity of task management.
                        </p>
                        <p>
                            Our mission is to provide a beautiful, intuitive platform that makes productivity
                            effortless and accessible to everyone, everywhere.
                        </p>
                    </div>
                    <div className="about-image">
                        <div className="image-placeholder mission-img">
                            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 6v6l4 2"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="about-section reverse">
                <div className="about-content">
                    <div className="about-image">
                        <div className="image-placeholder story-img">
                            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="about-text">
                        <h2>Our Story</h2>
                        <p>
                            TODO started as a simple idea: task management shouldn't be complicated.
                            Too many productivity apps overwhelm users with features they don't need,
                            making the simple act of tracking tasks feel like a chore.
                        </p>
                        <p>
                            We set out to build something different - a tool that's powerful yet simple,
                            beautiful yet functional, and most importantly, one that stays out of your
                            way so you can focus on getting things done.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <h2 className="section-title">Our Core Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                <path d="M2 17l10 5 10-5"></path>
                                <path d="M2 12l10 5 10-5"></path>
                            </svg>
                        </div>
                        <h3>Simplicity First</h3>
                        <p>We believe the best tools are the ones you don't have to think about. Every feature is designed with simplicity in mind.</p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3>User-Centric</h3>
                        <p>Our users are at the heart of everything we do. We listen, learn, and continuously improve based on your feedback.</p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>
                        <h3>Privacy Matters</h3>
                        <p>Your data is yours. We use industry-standard encryption and never sell your information to third parties.</p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                            </svg>
                        </div>
                        <h3>Always Improving</h3>
                        <p>We're committed to continuous improvement, regularly adding features and enhancements based on user needs.</p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-container">
                    <div className="stat-box">
                        <h3>10,000+</h3>
                        <p>Active Users</p>
                    </div>
                    <div className="stat-box">
                        <h3>500K+</h3>
                        <p>Tasks Completed</p>
                    </div>
                    <div className="stat-box">
                        <h3>150+</h3>
                        <p>Countries</p>
                    </div>
                    <div className="stat-box">
                        <h3>99.9%</h3>
                        <p>Uptime</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <h2 className="section-title">Meet the Creator</h2>
                <div className="team-container">
                    <div className="team-card">
                        <div className="team-avatar">
                            <img
                                src="https://github.com/Ashish-Zx.png"
                                alt="Ashish"
                                onError={(e) => {
                                    e.target.src = "https://ui-avatars.com/api/?name=Ashish&background=667eea&color=fff&size=200";
                                }}
                            />
                        </div>
                        <h3>Ashish</h3>
                        <p className="team-role">Full Stack Developer</p>
                        <p className="team-bio">
                            Passionate about building tools that make people's lives easier.
                            Focused on creating intuitive, beautiful experiences.
                        </p>
                        <a
                            href="https://github.com/Ashish-Zx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-github"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View GitHub
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;