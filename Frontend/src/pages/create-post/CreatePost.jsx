import React from 'react'
import "./createpost.css"
import axios from 'axios'

const CreatePost = () => {


    function handleSubmit(event) {

        event.preventDefault()


        const formData = new FormData(event.target)


        axios.post("http://localhost:3000/v1/api/posts/create", formData, {
            headers: {
                authorization: "bearer " + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
        })

    }


    return (
        <main>
            <section className='create-post-view' >
                <h1>Create Post</h1>
                <form onSubmit={handleSubmit} >
                    <div className="input-group">
                        <label htmlFor="media">Enter media</label>
                        <input
                            type="file"
                            id="media"
                            name="media"
                            accept='image/*'
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="caption">Enter caption</label>
                        <textarea
                            id="caption"
                            name="caption"
                        >
                        </textarea>
                    </div>

                    <button>Submit</button>
                </form>
            </section>

        </main>


    )
}

export default CreatePost