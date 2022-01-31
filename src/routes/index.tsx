import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JoinPage from '../pages/JoinPage';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';

const index = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/main" element={<MainPage />} />
        </Routes>
    );
};

export default index;
