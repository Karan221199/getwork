// pwd ki theory likhi h app me pdhliyo

const express= require('express')
const bcrypt = require('bcryptjs')
const router=express.Router()
const mongoose=require('mongoose')

const User=mongoose.model("User")




router.post('/signup',(req,res)=>{
    const {name,email,password,pic} = req.body
    if(!email  || !password || !name){
        return res.status(422).json({error: "please fill all the fields"})
    }

    User.findOne({email:email}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error: "User already exists with that email"}) 
        }

        bcrypt.hash(password,12).then(hashedpassword=>{
            const user=new User({
                email,
                password:hashedpassword,
                name,
                pic
            })
            user.save().then(user=>{
                res.json({message:"saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })
      
    })
    .catch(err=>{
        console.log(err);
    })
 
})


/*router.post('/signin',(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.status(422).json({error:"please fill email or password"})
    }
    User.findOne({email:email}).then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid email or password"})
        }
        // aa dekh ethe aapa hun encrypted pwd nu aa compare krna
        bcrypt.compare(password,savedUser.password).then(domatch=>{
            if(domatch)
            {
               // res.json({message:"login succesffully"})
               // we are generating the token on user id and assigning it in id
               const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
               const {_id,name,email,followers,following,pic}=savedUser
               res.json({token,user:{_id,name,email,followers,following,pic}})
            }
            else
            {
                return res.status(422).json({error:"Invalid email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})*/



module.exports = router