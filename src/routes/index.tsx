import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JoinPage from '../pages/JoinPage';
import LoginPage from '../pages/LoginPage';

const index = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
        </Routes>
    );
};

export default index;
