import React from 'react';
import { Image } from 'react-bootstrap';
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import '../css/Post.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Post = ({ posts , loading}) => {
    
    if(loading){
        return <h2>Loading...</h2>;
    }

    return (
    <>
        {
            posts.map(post => (

            <div className="card" key={post._id}>
                <div className="card-img">
                    <Image src={post.photo} className="img" alt="img" />
                </div>
                <div className="card-body">
                    <p className='logo-actions'>
                        <span><AiOutlineDelete className='logo delete' onClick={()=>{
                            if (window.confirm("Are you sure you want to delete?")) {
                                axios.delete(`/delete/${post._id}`)
                                .then((res =>{
                                    console.log(res);
                                    window.location.reload();
                                }))
                                .catch((err)=>{
                                    console.log(err);
                                })
                            }
                        }} /></span>
                        <Link to={`/editpost/${post._id}`}>
                            <span><BiEdit className='logo edit' style={{color:"black"}}/></span>
                        </Link>
                    </p>
                    <p>
                        <span className='category'>{post.category}</span>
                        <span className='timeDate'>{post.updatedAt.slice(8,10)}/{post.updatedAt.slice(5,7)}/{post.updatedAt.slice(0,4)}</span>
                    </p>
                    <p className="card-captions">{post.caption}</p>        
                </div>
            </div>
            ))
        }
    </>
  )
};

export default Post;