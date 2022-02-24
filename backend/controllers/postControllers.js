const asyncHandler  = require('express-async-handler');
const Post = require('../models/PostModel');

const addPost = asyncHandler(async (req,res) => {

    const { category , caption  } = req.body;

    const post = await Post.create({
        category , caption
    });

    if(post) {
        res.json({post})
    }else{
        res.status(400);
        throw new Error("Error Occured During Adding New Post");
    }

});

const editPost = asyncHandler(async (req,res) => {
    const { category , caption  } = req.body;
    const post = await Post.findById(req.params.id);
    if(post){
        post.category = category;
        post.caption = caption;
        const updatedPost = await post.save();
        res.json(updatedPost);
        
    }else{
        res.status(404);
        throw new Error("Vaccine not found");
    }
});

const getPost = asyncHandler(async (req,res) => {
    const posts = await Post.find({});
        if(posts){
            res.json(posts)
        }else{
            res.status(400);
            throw new Error("Error Occured During fetching Vaccine");
        } 
});

const getSinglePost = asyncHandler(async (req,res) => {
    const post = await Post.findById(req.params.id);
    if(post){
        res.json(post);
    }
    else{
        res.status(400);
        res.json({
            msg:"Unable to get the post"
        })
    }

})

const deletePost = asyncHandler(async(req,res) => {
    const post = await Post.findById(req.params.id);
    if(post){
        await post.remove();
        res.json({message:"Vaccine Removed"});
    }else{
        res.status(401);
        throw new Error("Vaccine not found");
    }

})



module.exports = { addPost , getPost , deletePost , editPost, getSinglePost} ;

    



