import { useState } from "react";
import AddNewStudent from "./AddNewStudent.js";
import { students } from "./students.js";

export function StudentListParent() {
  const [student, setStudent] = useState("");
  const newStudent = (childdata) => {
    setStudent(childdata);
  };
  function seeAllStudent() {
    students.push(student);
    JSON.stringify(students);
  }

  return (
    <div>
      <div>
        <AddNewStudent newStudent={student} />
      </div>
      {/* <button onClick={()=>seeAllStudent()}>SEE ALL STUDENTS</button> */}
      <div>{JSON.stringify(students)}</div>
    </div>
  );
}
