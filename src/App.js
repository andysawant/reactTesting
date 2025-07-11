import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', marginTop: '60px', width: '100%' }}>
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}

export default App;