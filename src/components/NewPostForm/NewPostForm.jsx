import React, { useEffect, useState } from "react"
import * as postAPI from '../../utilities/posts-api'
import './NewPostForm.css'


export default function NewPostForm({setUpdate, user}) {
    
    const initialState = {
        subject: '',
        body: '',
        username: user.name
    }


    const [postData, setPostData] = useState(initialState);
    const [error, setError] = useState('')

    function handleChange(evt) {
       const inputData = {...postData, [evt.target.name]: evt.target.value}
       setPostData(inputData);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            
        await postAPI.createPost(postData, user)
            setUpdate(true)
            setPostData(initialState);
            } catch (error) {
            console.log('Error')  
            }
    }

  return (
    <div>
        <form className="new-post-form" onSubmit={handleSubmit}>
            <div className="subject">
            <label>Subject</label>
            <input className="subject-input-field"
                type='text'
                name='subject'
                onChange={handleChange}
                value={postData.subject}
            />
            </div>
            <div className="body">
            <label>Body</label>
            <input className="body-input-field" 
                type='text'
                name='body'
                onChange={handleChange}
                value={postData.body}
            />
            </div>
            <button className="post-button" type="submit" >Post</button>
        </form>
        <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}