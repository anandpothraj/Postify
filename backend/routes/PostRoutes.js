const express = require('express');
const { addPost , getPost, deletePost , getSinglePost , editPost } = require('../controllers/postControllers');
const router = express.Router();

router.route('/posts').get(getPost);
router.route('/editpost/:id').get(getSinglePost).put(editPost);
router.route('/delete/:id').delete(deletePost);
router.route('/addpost').post(addPost);

module.exports = router;