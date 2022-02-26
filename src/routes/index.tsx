import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JoinPage from '../pages/JoinPage';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import UrlErrorPage from '../pages/UrlErrorPage';

const index = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/main/:menu" element={<MainPage />} />
            <Route path="*" element={<UrlErrorPage />} />
        </Routes>
    );
};

export default index;
