import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/questions">Questions</Link></li>
                    <li><Link to="/ask">Ask Question</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
