import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Post.css';

const AddPostBtn = () => {

    const navigate = useNavigate();

  return (
    <>
        <button className="addBtn" onClick={()=>navigate(`/addpost`)}>+ Post</button>
    </>
  )
}

export default AddPostBtn;