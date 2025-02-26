import React from 'react'
import "./Register.css"
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ errors, setErrors ] = useState([])


    function handleSubmit(e) {
        e.preventDefault()

        axios.post('http://localhost:3000/v1/api/users/register', {
            username: username,
            email: email,
            password: password
        })
            .then(response => {
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                navigate('/')
            })
            .catch(err => {
                setErrors(err.response.data.errors)
                console.log(err.response.data)
            })

    }


    return (
        <main>
            <section className="form-view">
                <h1>Register</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text" id="username" name="username"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" id="email" name="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" id="password" name="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit">Register</button>
                </form>

                <ul>

                    {
                        errors.map((error, index) => {
                            return (
                                <li>{error.msg}</li>
                            )
                        })
                    }

                </ul>

            </section>

        </main>

    )
}

export default Register