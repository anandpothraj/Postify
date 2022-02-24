const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        category: {
            type:String,
            required:true,
            trim:true,
        },
        photo:{
            type:String,
            required:true,
            default:
                "https://picsum.photos/500/400"
        },
        caption:{
            type:String,
            required:true,
            trim:true,
        },
    },
    {
        timestamps:true,
    }
);


const Post = mongoose.model("Post", userSchema);

module.exports = Post;    


