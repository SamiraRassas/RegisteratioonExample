import {useState} from "react";
import Child from "./AddNewStudent.js";
export function StudentListParent(){
    const [student, setstudent]= useState('');
    const newStudent= (childdata) => {
        setstudent(childdata);
    }
    return (
        <div>
           
            <div>
                <Child newStudent={newStudent}/>
            </div> 
            {student}
                   </div>
    )

}
