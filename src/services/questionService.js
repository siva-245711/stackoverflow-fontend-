import axios from 'axios';

export const getQuestions = async () => {
    const response = await axios.get('/api/questions');
    return response.data;
};

export const getQuestionById = async (id) => {
    const response = await axios.get(`/api/questions/${id}`);
    return response.data;
};

export const askQuestion = async (questionData) => {
    const response = await axios.post('/api/questions', questionData);
    return response.data;
};

export const postAnswer = async (questionId, answerData) => {
    const response = await axios.post(`/api/questions/${questionId}/answers`, answerData);
    return response.data;
};

export const vote = async (id, type, voteType) => {
    const response = await axios.post(`/api/${type}/${id}/vote`, { voteType });
    return response.data;
};
