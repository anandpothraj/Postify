import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../css/Post.css';

const Header = () => {

  return (
    <>
      <Navbar.Brand href="/" className="header">Postify</Navbar.Brand>
    </>
  )
};

export default Header;