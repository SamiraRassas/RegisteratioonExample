import React from "react";
 import {students} from "./students.js";
// const fs= require(fs);


export default function AddNewStudent({newStudent}){
    const student=students; // data I want to Pass
        return (
        <div>
           <button onClick={()=> newStudent(JSON.stringify(student))}>See Student</button>  
        </div>
    )
 }