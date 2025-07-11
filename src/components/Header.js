// src/components/Header.js
import React from 'react';

const Header = () => (
    <header style={{
        width: '100%',
        height: '60px',
        background: '#20232a',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '220px', // to account for sidebar width + padding
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000
    }}>
        <h2>My App Header</h2>
    </header>
);

export default Header;