import React,{Component} from "react";
import React,{useState} from "react";
import { NavLink } from "react-router-dom";


 export class Tasks extends Component{
  
    render(){

     //Create the array for store the task details
             

      let mytasks = [
  
          {lable : "Task 1"},
          {lable : "Task 2"},
          {lable : "Task 3"},
          {lable : "Task 4"},

          


      ];
    
      return (

        
        <div>
            
            {

                mytasks.map((item,index)=>(
                       
                    <NavLink key = {index} info {  item } />



                ))


            }


        </div>
     




       )


    }
    
    
 }


