import React,{useState,useEffect} from 'react';

console.log("hello")
const Appliedjob = ()=>{
   
    const [data,setData] =useState([])

    useEffect(() => {
      fetch('/myjobs',{
         headers:{
             "Authorization":"Bearer "+localStorage.getItem("jwt1")

         } 
      }) .then(res=>res.json())
      .then(result=>{
            console.log(result)
         
            setData(result.mypost)
      })
    },[])
    
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
                
                  </div>
                    )
                })
            }
                
         </div>
        
    )
}
export default Appliedjob