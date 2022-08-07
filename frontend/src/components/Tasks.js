import React,{useState} from "react";
//import React,{Component} from "react"


 //Function Base Component
function Task(){


 return(
    
   <div className="container" class="p-3 mb-2 bg-light" >


    <form  class="p-3 mb-2 bg-secondary text-dark">
    <h1 class="text-dark"><cental><strong>Add Task</strong></cental></h1><br></br>
    
    <div className="form-group" style={{width:"500px" ,}} >
      <label for="uname"><strong>Name</strong></label>
      <input type="text" class="form-control" id="uname" placeholder="Name"
     />
  
    </div><br></br>
    
    <div className="form-group" style={{width:"500px"}}>
      <label for="emial"><strong>Description</strong></label>
      <input type="text" class="form-control" id="email" placeholder="Description"
       />
      
      
  
    </div><br></br>
  
    <div className="form-group" style={{width:"500px"}}>
      <label for="emial"><strong>Due Date</strong></label>
      <input type="date" class="form-control" id="email" placeholder="12 October 2022"
       />
      
      
    </div><br></br>
    
    <a href="Task" type="button" class="btn btn-danger" style={{width:"300px"}}><strong><i></i>&nbsp;&nbsp;Save</strong></a>
   
   </form>
   </div>


 )




} 

export default Task