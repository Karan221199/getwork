const express=require('express')
const mongoose=require('mongoose')
const app=express()
const PORT=3000
const {MONGOURI} =require('./keys')



mongoose.connect(MONGOURI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
mongoose.connection.on('connected',()=>{
console.log('connected to mongo')
})

mongoose.connection.on('error',(err)=>{
    console.log('err connecting',err)
    })
    require('./models/user')
    require('./models/employer')
    require('./models/post')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.listen(PORT,()=>{
    console.log("server is running on " , PORT)
})