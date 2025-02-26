import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
import Index from '../pages/index/Index'
import Protected from '../components/Protected'
import CreatePost from '../pages/create-post/CreatePost'

const AppRouter = () => {
    return (

        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Protected><Index /></Protected>} />
                <Route path="/create-post" element={<Protected><CreatePost /></Protected>} />
            </Routes>
        </Router>

    )
}

export default AppRouter