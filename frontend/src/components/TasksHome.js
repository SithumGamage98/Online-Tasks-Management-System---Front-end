import React,{Component} from "react";

//Class base component
export default class taskHome extends Component{

 render(){

    return(

        <diV class="p-3 mb-2 bg-light">  
         <br></br> 
         <div class="input-group">
         <div class="form-outline">
        <input id="search-input" type="search" id="form1" class="form-control" placeholder="Search" />
        </div>
        <button id="search-button" type="button" class="btn btn-danger">
        <i class="fas fa-search"></i>

      </button>
      </div>
     
<div> <h2 class="text-black " style={{width:200,height:70}}>All Tasks</h2></div>
           
          
<div class="card-group">
  <div class="card" >
                  
    <div  class="p-3 mb-2 bg-dark text-white card-body">
      <h5 class="card-title">Task 1</h5>
      <p>
      This page has Microsoft Excel sample datasets that you can use for testing, Excel training and demos, and other learning activities.
       The sample file contents are described in the sections below
      , so you can decide which dataset will be the best match for what you need.
                                                                         

      </p>
      
    </div>
  </div>
  &nbsp;&nbsp;
  <div class="card" >
    
    <div  class="p-3 mb-2 bg-secondary text-white card-body">
      <h5 class="card-title">Task 2</h5>
      
      <p>
      This page has Microsoft Excel sample datasets that you can use for testing, Excel training and demos, and other learning activities.
       The sample file contents are described in the sections below
      , so you can decide which dataset will be the best match for what you need.
                                                                         
      </p>
    </div>
  </div>  

  <div class="card" >
    
    <div  class="p-3 mb-2 bg-dark text-white card-body">
      <h5 class="card-title">Task 3</h5>
      <p>
      This page has Microsoft Excel sample datasets that you can use for testing, Excel training and demos, and other learning activities.
       The sample file contents are described in the sections below
      , so you can decide which dataset will be the best match for what you need.
                                                                         
      </p>
    </div>
  </div>
</div>

<div class="card-group">
  <div class="card" >
  
    <div  class="p-3 mb-2 bg-secondary text-white card-body">
      <h5 class="card-title">Task 4</h5>
      <p>
      This page has Microsoft Excel sample datasets that you can use for testing, Excel training and demos, and other learning activities.
       The sample file contents are described in the sections below
      , so you can decide which dataset will be the best match for what you need.
                                                                         
      </p>
    </div>
  </div>

  
  <div class="card">
    
    <div  class="p-3 mb-2 bg-dark text-white card-body">
      <h5 class="card-title">Task 5</h5>
      <p>
      This page has Microsoft Excel sample datasets that you can use for testing, Excel training and demos, and other learning activities.
       The sample file contents are described in the sections below
      , so you can decide which dataset will be the best match for what you need.
                                                                         
      </p>
    </div>
  </div>
  <div class="card">
    
    <div class="p-3 mb-2 bg-secondary text-white card-body">
      <h5 class="card-title">Task 6</h5>
      <p>
      This page has Microsoft Excel sample datasets that you can use for testing, Excel training and demos, and other learning activities.
       The sample file contents are described in the sections below
      , so you can decide which dataset will be the best match for what you need.
                                                                         
      </p>
    </div>
  </div>
<br></br><br></br>

 </div>

 <a href="Task" type="button" class="btn btn-danger" style={{width:"200px" }}><strong><i className="fa-solid fa-user-clock"></i>&nbsp;&nbsp;Add Task</strong></a>

 </diV>
 ) 
 }

 }