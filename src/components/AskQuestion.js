import React, { useState } from 'react';
import { askQuestion } from '../services/questionService';
import '../styles/AskQuestion.css';
const AskQuestion = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await askQuestion({ title, body });
            alert('Question posted successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to post question');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} required />
            <button type="submit">Post Question</button>
        </form>
    );
};

export default AskQuestion;
