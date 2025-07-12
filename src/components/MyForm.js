import React, { useState } from 'react';

const MyForm = () => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === '') {
            setError('This field cannot be blank.');
            return;
        }
        alert(`Submitted: ${input}`);
        setInput('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter something:
                <input
                    type="text"
                    value={input}
                    onChange={e => {
                        setInput(e.target.value);
                        if (error) setError('');
                    }}
                    style={{ marginLeft: '8px' }}
                />
            </label>
            <button type="submit" style={{ marginLeft: '8px' }}>Submit</button>
            {error && (
                <div style={{ color: 'red', marginTop: '8px' }}>{error}</div>
            )}
        </form>
    );
};

export default MyForm;