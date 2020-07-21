import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import  M from 'materialize-css'

const Home = ()=>{
    const history=useHistory()
    const [data,setData] =useState([])

    useEffect(() => {
      fetch('/allpost',{
         headers:{
             "Authorization":"Bearer "+localStorage.getItem("jwt1")

         } 
      }) .then(res=>res.json())
      .then(result=>{
            console.log(result)
         
            setData(result.posts)
      })
    },[])
    const Postdata = (item)=>{
        
       fetch("/apply",{
           method:"post",
           headers:{
               "Content-Type":"application/json",
               "Authorization":"Bearer "+localStorage.getItem("jwt1")
           },
           body:JSON.stringify({
               title:item.title,
               body:item.body,
               jobdescription:item.jobdescription,
               employerid:item.postedBy._id
           })
       }).then(res=>res.json())
       .then(data1=>{
           if(data1.error){
               M.toast({html: data1.error,classes:"#c62828 red darken-3"})
           }
           else{
            M.toast({html:"applied successfully",classes:"#8bc34a light-green" })
            history.push('/')
        }
       }).catch(err=>{
        console.log(err)
    })
    }
    return(
        <div className="home">
            {
                data.map(item=>{
                    return(
                        <div className="card home-card" key={item._id}>
                    <h2>{item.title}</h2>
                    <div className="card content">
                    <p>{item.body}</p>
                    <p>{item.jobdescription}</p>
                   
                    </div>
                    <div style={{textAlign:"center"}}>
                    <button className="btn waves-effect waves-light #64b5f6 blue darken-1 mybtn" onClick={()=>Postdata(item)}
                     >Apply Here
                    </button>
                    </div>
                  </div>
                    )
                })
            }
                
         </div>
        
    )
}
export default Home