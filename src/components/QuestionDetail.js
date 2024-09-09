import React, { useState, useEffect } from 'react';
import { getQuestionById } from '../services/questionService';
import { useParams } from 'react-router-dom';
import '../styles/QuestionDetail.css';
const QuestionDetail = () => {
    const { id } = useParams();
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        const fetchQuestion = async () => {
            const data = await getQuestionById(id);
            setQuestion(data);
        };
        fetchQuestion();
    }, [id]);

    return question ? (
        <div>
            <h1>{question.title}</h1>
            <p>{question.body}</p>
            <h2>Answers</h2>
            <ul>
                {question.answers.map((answer) => (
                    <li key={answer.id}>
                        {answer.body}
                    </li>
                ))}
            </ul>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default QuestionDetail;
