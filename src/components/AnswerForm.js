import React, { useState } from 'react';
import { postAnswer } from '../services/questionService';
import '../styles/AnswerForm.css';
const AnswerForm = ({ questionId }) => {
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postAnswer(questionId, { body: answer });
            alert('Answer submitted successfully');
        } catch (error) {
            alert('Failed to submit answer');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea placeholder="Your answer" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
            <button type="submit">Submit Answer</button>
        </form>
    );
};

export default AnswerForm;
