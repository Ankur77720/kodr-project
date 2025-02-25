import React from 'react'
import "./Register.css"

const Register = () => {
    return (
        <main>
            <section className="form-view">
                <h1>Register</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit">Register</button>
                </form>

            </section>

        </main>

    )
}

export default Register