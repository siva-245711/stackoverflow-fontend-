import React from 'react';
import { vote } from '../services/questionService';
import '../styles/VoteButton.css';
const VoteButton = ({ id, type, voteType }) => {
    const handleVote = async () => {
        try {
            await vote(id, type, voteType);
            alert(`${voteType} successful!`);
        } catch (error) {
            alert(`Failed to ${voteType}`);
        }
    };

    return (
        <button onClick={handleVote}>
            {voteType === 'upvote' ? '👍' : '👎'}
        </button>
    );
};

export default VoteButton;
