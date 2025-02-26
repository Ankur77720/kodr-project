import React from 'react'
import "./index.css"
import { useNavigate } from 'react-router-dom'

const Index = () => {

    const navigate = useNavigate()

    return (
        <main>
            <nav>
                <p>Some logo</p>
                <button
                    onClick={() => {
                        navigate('/create-post')
                    }}
                >create post</button>
            </nav>
        </main>

    )
}

export default Index