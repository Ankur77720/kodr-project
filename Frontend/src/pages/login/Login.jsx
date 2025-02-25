import React from 'react'

const Login = () => {
    return (
        <main>
            <section className="form-view">
                <h1>Login</h1>
                <form>

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

                    <button type="submit">Login</button>
                </form>

            </section>

        </main>

    )
}

export default Login