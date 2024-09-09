import axios from 'axios';

export const register = async (userData) => {
    const response = await axios.post('/api/users/register', userData);
    return response.data;
};

export const login = async (credentials) => {
    const response = await axios.post('/api/users/login', credentials);
    return response.data;
};

export const getUserProfile = async () => {
    const response = await axios.get('/api/users/profile');
    return response.data;
};

