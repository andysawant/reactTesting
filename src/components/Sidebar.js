// Sidebar.js
import React from 'react';

const Sidebar = ({ onSelect }) => (
    <div style={{ width: '220px', background: '#282c34', color: 'white', minHeight: 'calc(100vh - 60px)', padding: '24px 0' }}>
        <h3>Menu</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#" onClick={() => onSelect('dashboard')} style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a></li>
            <li><a href="#" onClick={() => onSelect('form')} style={{ color: 'white', textDecoration: 'none' }}>Open Form</a></li>
            <li><a href="#" onClick={() => onSelect('profile')} style={{ color: 'white', textDecoration: 'none' }}>Profile</a></li>
            <li><a href="#" onClick={() => onSelect('logout')} style={{ color: 'white', textDecoration: 'none' }}>Logout</a></li>
        </ul>
    </div>
);

export default Sidebar;