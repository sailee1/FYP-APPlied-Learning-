var express = require('express');
var app = new express(); 

const router = express.Router()
var Posts = require('../schema/posts'); 
var Comments = require('../schema/comments'); 



router.get('/', function (req, res){
    Posts.find({}, function(err,posts){
        if (err){
            console.log(err);
        } else {
            res.render('index', {posts:posts})
        }
    })
})

router.get('/posts/detail/:id', function(req,res){
    Posts.findById(req.params.id, function (err, postDetail){
        if(err){
            console.log(err)
        }else{
            Comments.find({'postId': req.params.id}, function (err,comments){
                res.render('post-detail', {postDetail: postDetail, comments: comments, postId:req.params.id})
            })
        }
    })
})

module.exports = router; 