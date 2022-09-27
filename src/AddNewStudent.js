import React from "react";
import {useState} from "react";
 import {students} from "./students.js";

export default function AddNewStudent(newStudent){
  const [name, setName] = useState("");
  const [courses, setCourses] = useState([""]);
  const [operation, setOperation] = useState("");
  const [paid, setPaid] = useState(true);
  const handleName= event => {
    setName(event.target.value);
    console.log('name is:', event.target.value);
  };
  const handleCourse= event => {
    setCourses(event.target.value);
    console.log('courses is:', event.target.value);
  };
  const handleOperation= event => {
    setOperation(event.target.value);
    console.log('operation is:', event.target.value);
  };
  const handlePaid= event => {
    setPaid(event.target.value);
    console.log('payment is:', event.target.value);
  };
  const newstudent={name,courses,operation,paid};
  students.push(newstudent);
  // const handleClick = event => {
  //   event.preventDefault();
  //   const newstudent={name,courses,operation,paid};
  //   students.push(newstudent);
  //   console.log('handleClick 👉️', newstudent);
  // }
  return (
    <div>
      {/* <div>{JSON.stringify(students)}</div> */}
    <form >
    <br>
      </br>
      <br>
      </br>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleName}
        />
      </label>
      <br>
      </br>
      <br>
      </br>
      <label>Enter your courses:
        <input
          type="text" 
          value={courses}
          onChange={handleCourse}
        />
      </label>
      <br>
      </br>
      <br>
      </br>
      <label>Enter registeration status:
        <input
          type="text" 
          value={operation}
          onChange={handleOperation}
        />
      </label>
      <br>
      </br>
      <br>
      </br>
      <label>Enter your payment:
        <input
          type="text" 
          value={paid}
          onChange={handlePaid}
        />
      </label>
      <br>
      </br>
      <br>
      </br>
    </form>

      <div>
          <button onClick={()=>newStudent(newstudent)} >See Student</button> 
      </div>
    </div>
  )

  
 }

 
 