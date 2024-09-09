import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../services/authService';
import '../styles/UserProfile.css';
const UserProfile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const data = await getUserProfile();
            setProfile(data);
        };
        fetchProfile();
    }, []);

    return profile ? (
        <div>
            <h1>{profile.username}</h1>
            <p>Email: {profile.email}</p>
            <h2>Your Questions</h2>
            <ul>
                {profile.questions.map((question) => (
                    <li key={question.id}>{question.title}</li>
                ))}
            </ul>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default UserProfile;
