import {useState} from "react";
import AddNewStudent from "./AddNewStudent.js";
export function StudentListParent(){
    const [student, setStudent]= useState('');
    const newStudent= (childdata) => {
        setStudent(childdata);
    }
    return (
        <div>
            <div>
                <AddNewStudent newStudent={newStudent}/>
            </div> 
           <h1>'the new student is' {student}</h1>
             </div>
    )

}
