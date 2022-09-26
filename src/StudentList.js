import React from "react";
import {students} from "./students.js" //to determaine certain modules
export const StudentList=()=>{
    return(
      <div>
    {students.map((data,key)=>{
      return(
      <StudentInfo name={data.name} courses={data.courses} paid={data.paid.toString()}/>
      )
           }
    )}
        </div>
   )
} 
// export default StudentList

const StudentInfo=({name,courses,paid})=>{
  return (
    <div>

            <div>{name}</div>
            <div>{courses}</div>
            <div>{paid}</div>
            <div>************</div>
            </div>
)
}
