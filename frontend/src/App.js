import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from './screens/Home';
import AddPost from './screens/AddPost';
import EditPost from './screens/EditPost';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
          <Header/>
            <main>
              <Routes>
                <Route path='/' element={<Home/>} exact/>
                <Route path='/addpost' element={<AddPost/>} exact />
                <Route path='/editpost/:id' element={<EditPost/>} exact />
              </Routes>
            </main>
            <Footer/>
      </Router>
    </>
  )
};

export default App;