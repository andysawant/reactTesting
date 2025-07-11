// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
    return (
        <div style={{
            width: '220px',
            background: '#282c34',
            color: 'white',
            minHeight: 'calc(100vh - 60px)',
            padding: '24px 0'
        }}>
            <h3>Menu</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>Dashboard</li>
                <li>Settings</li>
                <li>Profile</li>
                <li>Logout</li>
            </ul>
        </div>
    );
};

export default Sidebar;
