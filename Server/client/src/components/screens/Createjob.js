import React from 'react'

const Createjob=()=>{
    return(
        <div className="card input-field "
        style={{
            margin:"10px auto",
            maxWidth:"600px",
            padding:"10px",
            textAlign:"center",
            marginTop:"50px"
        }}
        >
            <h2>Getwork</h2>
            <input type="text" placeholder="Company name"/>
            <input type="text" placeholder="About Company"/>
            <input type="text" placeholder="Job Description"/>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1 mybtn" 
            >Create Job
            </button>
        </div>
    )
}

export default Createjob