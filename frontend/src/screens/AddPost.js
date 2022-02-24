import React, { useState } from 'react';
import { Container, Card, Form , Button } from 'react-bootstrap';
import { Link , useNavigate } from 'react-router-dom';
import { ToastContainer , toast } from 'react-toastify';
import axios from 'axios';

const AddPost = () => {

  const [ category , setCategory ] = useState("");
  const [ caption , setCaption] = useState("");
  const navigate = useNavigate();

  const success = (e) => {
    toast.success(e)
  }

  const notify = (e) => {
    toast.error(e)
  }

  const resetFields = () => {
    setCategory("");
    setCaption("");
  }

  const submitHandler = (e) => {
    e.preventDefault();
      
      try{

        if(category && caption){
  
          axios
                  .post("/addpost", { category , caption })
                  .then(res => {
                    console.log(res.data);
                    success("New Post Added Successfully");
                    resetFields();
                    setTimeout(function () {
                      navigate(`/`);
                    }, 2000);
                  })
                  .catch(err => {
                      console.log(err);
                  })
        }else{
          console.log("Plz Fill all the fields");
          notify("Plz Fill all the field");
        }
  
      }catch(error){
        console.log(error);
      }

    }

  return (
    <>
    <hr />
      <Container>
      <ToastContainer/>
        <Card>
          <Card.Header>Add New Post</Card.Header>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="Category" className="mb-3">
                <Form.Label>Enter Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Category"
                  name="category"
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="Caption">
                <Form.Label>Enter Caption</Form.Label>
                <Form.Control
                as="textarea"
                  type="text"
                  placeholder="Enter Caption"
                  name="caption"
                  value={caption}
                  onChange={(e)=>setCaption(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" variant="success" className="m-2">
                Add Post
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

export default AddPost