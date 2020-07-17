const express=require('express')
const mongoose=require('mongoose')
const app=express()
const PORT=3000
const {MONGOURI} =require('./keys')

require('./models/user')

app.use(require('./routes/auth'))
app.use(express.json())
mongoose.connect(MONGOURI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
mongoose.connection.on('connected',()=>{
console.log('conneted to mongo')
})

mongoose.connection.on('error',(err)=>{
    console.log('err connecting',err)
    })

app.listen(PORT,()=>{
    console.log("server is running on " , PORT)
})