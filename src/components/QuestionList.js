import React, { useState, useEffect } from 'react';
import { getQuestions } from '../services/questionService';
import '../styles/QuestionList.css';
const QuestionList = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const data = await getQuestions();
            setQuestions(data);
        };
        fetchQuestions();
    }, []);

    return (
        <div>
            <h1>Questions</h1>
            <ul>
                {questions.map((question) => (
                    <li key={question.id}>
                        <h3>{question.title}</h3>
                        <p>{question.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionList;
