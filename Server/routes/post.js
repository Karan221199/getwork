const express= require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Post= mongoose.model("Post")
const requireLogin=require('../middleware/requireLogin')
const requireLoginEmployer = require('../middleware/requireLoginEmployer')


router.get('/allpost',requireLogin,(req,res)=>{
    Post.find().populate("postedBy","_id name")
    .sort('-createdAt') //sorting in descending order
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/createpost',requireLoginEmployer,(req,res)=>{
    const {title,body,jobdescription}=req.body
    if(!title || !body || !jobdescription){
        return res.status(422).json({error:"please add all the fields"})
    }
  
    req.employer.password=undefined
 
    const post=new Post({
        title,
        body,
        jobdescription,
        postedBy:req.employer
        
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/mypost',requireLoginEmployer,(req,res)=>{
    Post.find({postedBy:req.employer._id})
    .populate("postedBy","_id name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})






module.exports=router