import React, { useState } from 'react';

const MyForm = () => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: ${input}`);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter something:
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    style={{ marginLeft: '8px' }}
                />
            </label>
            <button type="submit" style={{ marginLeft: '8px' }}>Submit</button>
        </form>
    );
};

export default MyForm;