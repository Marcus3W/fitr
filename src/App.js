import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import Login from './pages/Login';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                {/*<Route path="/sign-up" element={<Sign-up />} />*/}


            </Routes>
        </BrowserRouter>
    );
}

export default App;

