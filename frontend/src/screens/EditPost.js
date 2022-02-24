import React, { useState , useEffect } from 'react';
import { Container, Card, Form , Button } from 'react-bootstrap';
import { Link , useNavigate } from 'react-router-dom';
import { ToastContainer , toast } from 'react-toastify';
import axios from 'axios';

const EditPost = () => {

  const [ category , setCategory ] = useState("");
  const [ caption , setCaption] = useState("");
  const [ postInfo, setPostInfo ] = useState([]);
  const navigate = useNavigate();

  const success = (e) => {
    toast.success(e)
  }
  
  const resetFields = () => {
    setCategory(postInfo.category);
    setCaption(postInfo.caption);
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    try{
      var url = window.location.href;
      const strUrl = url.toString();
      const id = strUrl.slice(31);
      axios.put(`/editpost/${id}`,{category,caption})
      .then(res => {
        console.log(res);
        success("Post Edited Successfully");
        setCategory("");
        setCaption("");
        setTimeout(function () {
          navigate(`/`);
        }, 2000);
      })
      .catch(err => {
          console.log(err);
      })
    }
    catch(error){
        console.log(error);
    }

  }

  useEffect(()=>{
    try{
      if(postInfo.length === 0){
        var url = window.location.href;
        const strUrl = url.toString();
        const id = strUrl.slice(31);
        axios
        .get(`/editpost/${id}`)
        .then(res => {
          setPostInfo(res.data);
          setCategory(res.data.category);
          setCaption(res.data.caption);
        })
        .catch(err => {
            console.log(err);
        })
      }
    }
    catch(error){
        console.log(error);
    }
  })



  return (
    <>
    <hr />
      <Container>
        <ToastContainer/>
        <Card>
          <Card.Header>Edit Post</Card.Header>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="Category" className="mb-3">
                <Form.Label>Edit Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Category"
                  name="category"
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="Caption">
                <Form.Label>Edit Caption</Form.Label>
                <Form.Control
                as="textarea"
                  type="text"
                  placeholder="Edit Caption"
                  name="caption"
                  value={caption}
                  onChange={(e)=>setCaption(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" variant="success" className="m-2">
                Edit Post
              </Button>
              <Button className="m-2" variant="primary" onClick={resetFields}>
                Reset Feilds
              </Button>
              <Link to="/">
                <Button className="m-2" variant="danger">
                  Go Back
                </Button>
              </Link>
            </Form>
          </Card.Body>
          <Card.Footer>
          </Card.Footer>
        </Card>
      </Container>
    </>
  )
}

export default EditPost;