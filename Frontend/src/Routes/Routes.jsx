import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'

const AppRouter = () => {
    return (

        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>

    )
}

export default AppRouter