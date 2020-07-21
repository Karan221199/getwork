const express= require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Applicant= mongoose.model("Applicant")
const requireLogin=require('../middleware/requireLogin')

router.post('/apply',requireLogin,(req,res)=>{
    const {title,body,jobdescription,employerid}=req.body
  
    //req.employer.password=undefined
 
    const applicant=new Applicant({
        title,
        body,
        jobdescription,
        employerid,
        appliedBy:req.user
        
    })
    applicant.save().then(result=>{
        res.json({applicant:result})
    })
    .catch(err=>{
        console.log(err)
    })
})
router.get('/myjobs',requireLogin,(req,res)=>{
    Applicant.find({appliedBy:req.user._id})
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports=router