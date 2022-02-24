import React , { useState , useEffect } from 'react';
import  Pagination  from '../components/Pagination';
import AddPostBtn from '../components/AddPostBtn';
import Loading from '../components/Loading';
import Post from '../components/Post';
import axios from 'axios';
import '../css/Post.css';
import { Button } from 'react-bootstrap';

const Home = () => {

  const [ posts , setPosts ] = useState([]);
  const [ loading , setLoading ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage ] = useState(5);
  const [ btnText , setBtnText ] = useState("Old Post");

  const sort = () => {
    if(btnText === "Old Post"){
      setBtnText("New Post")
    }
    else{
      setBtnText("Old Post");
    }
  }

  useEffect(()=> {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, [])


const reverse = posts.slice().reverse();
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const NewPost = reverse.slice(indexOfFirstPost,indexOfLastPost);
 const OldPost = posts.slice(indexOfFirstPost,indexOfLastPost)



 const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <hr/>
      <div className='container'>
        <div className="m-2">
          <AddPostBtn/>
          <Button className='btn btn-dark m-2' onClick={sort}>{btnText}</Button>
        </div>
        <div className="smallContainer">
          {
            (loading)?
              <>
                <Loading/>
              </>
              : 
              <>
              {
                (btnText === "Old Post")?
                <Post posts={NewPost} loading={loading} />
                :
                <Post posts={OldPost} loading={loading} />
              }
              </>
          }
        </div>
        <hr />
        <Pagination className="m-auto"
          postsPerPage={postsPerPage} 
          totalPosts={posts.length} 
          paginate={paginate}/>
        <hr />
      </div>
    </>
  )
}

export default Home;












            
              
              
  
            
          
      