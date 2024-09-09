import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';
import AskQuestion from './components/AskQuestion';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/questions" element={<QuestionList />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
