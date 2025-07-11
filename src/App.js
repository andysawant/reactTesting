import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import MyForm from './components/MyForm';

const App = () => {
    const [selected, setSelected] = useState('dashboard');

    const renderContent = () => {
        switch (selected) {
            case 'form':
                return <MyForm />;
            case 'profile':
                return <div>Profile Page</div>;
            case 'dashboard':
            default:
                return <div>Welcome to the Dashboard</div>;
        }
    };

    return (
        <div>
            <Header />
            <div style={{ display: 'flex', marginTop: '60px' }}>
                <Sidebar onSelect={setSelected} />
                <MainContent>
                    {renderContent()}
                </MainContent>
            </div>
        </div>
    );
};

export default App;