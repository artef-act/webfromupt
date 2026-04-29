import React from "react";

export default function Landing() {
    return (
        <div style={styles.page}>
            <header style={styles.header}>
                <div style={styles.brand}>Hallo</div>
                <nav style={styles.nav}>
                    <a href="#features" style={styles.link}>Features</a>
                    <a href="#about" style={styles.link}>About</a>
                    <a href="#contact" style={styles.link}>Contact</a>
                </nav>
            </header>

            <main style={styles.hero}>
                <h1 style={styles.title}>Welcome to Arif</h1>
                <p style={styles.subtitle}>
                    A simple landing page built with React. Start your journey with us today.
                </p>
                <div style={styles.actions}>
                    <a href="#get-started" style={styles.primaryButton}>Get Started</a>
                    <a href="#learn-more" style={styles.secondaryButton}>Learn More</a>
                </div>
            </main>

            <section id="features" style={styles.section}>
                <h2 style={styles.sectionTitle}>Features</h2>
                <div style={styles.cards}>
                    <div style={styles.card}>
                        <h3>Fast</h3>
                        <p>Optimized for speed and simplicity.</p>
                    </div>
                    <div style={styles.card}>
                        <h3>Responsive</h3>
                        <p>Looks great on desktop and mobile.</p>
                    </div>
                    <div style={styles.card}>
                        <h3>Modern</h3>
                        <p>Clean design with a lightweight structure.</p>
                    </div>
                </div>
            </section>

            <footer style={styles.footer}>
                <p>© 2026 Arif. All rights reserved.</p>
            </footer>
        </div>
    );
}

const styles = {
    page: {
        fontFamily: "system-ui, sans-serif",
        color: "#1f2937",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #ffffff 0%, #f3f4f6 100%)",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 32px",
        maxWidth: "1100px",
        margin: "0 auto",
    },
    brand: {
        fontSize: "1.4rem",
        fontWeight: "700",
    },
    nav: {
        display: "flex",
        gap: "20px",
    },
    link: {
        color: "#374151",
        textDecoration: "none",
        fontWeight: "500",
    },
    hero: {
        textAlign: "center",
        padding: "120px 24px 80px",
        maxWidth: "760px",
        margin: "0 auto",
    },
    title: {
        fontSize: "3rem",
        margin: "0 0 20px",
    },
    subtitle: {
        fontSize: "1.1rem",
        lineHeight: "1.8",
        color: "#4b5563",
        margin: "0 auto 32px",
        maxWidth: "620px",
    },
    actions: {
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        flexWrap: "wrap",
    },
    primaryButton: {
        backgroundColor: "#2563eb",
        color: "#ffffff",
        padding: "14px 28px",
        borderRadius: "999px",
        textDecoration: "none",
        fontWeight: "600",
    },
    secondaryButton: {
        border: "2px solid #2563eb",
        color: "#2563eb",
        padding: "14px 28px",
        borderRadius: "999px",
        textDecoration: "none",
        fontWeight: "600",
    },
    section: {
        padding: "60px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
    },
    sectionTitle: {
        fontSize: "2rem",
        marginBottom: "32px",
        textAlign: "center",
    },
    cards: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
    },
    card: {
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        padding: "24px",
        boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
    },
    footer: {
        padding: "24px 32px",
        textAlign: "center",
        color: "#6b7280",
    },
};