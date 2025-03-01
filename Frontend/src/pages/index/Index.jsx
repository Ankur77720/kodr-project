import React from 'react'
import "./index.css"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Index = () => {

    const navigate = useNavigate()
    const [ posts, setPosts ] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3000/v1/api/users/feed', {
            headers: {
                Authorization: "bearer " + localStorage.getItem('token')
            }
        }).then(response => {

            console.log(response.data)
            setPosts(response.data.posts)

        })

    }, [])


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

            <section className='feed-view'>

                <div className="posts">

                    {
                        posts.map(post => {
                            return (
                                <div className="post">
                                    <img src={post.media.thumbnail} alt="" />
                                </div>
                            )
                        })
                    }

                </div>

            </section>

        </main>

    )
}

export default Index