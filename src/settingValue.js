import{ useState} from "react";
export const Counter=()=>{
    const[count,setCount]=useState(0);
    const incrementCounter=()=>{
        setCount(count=>count+1)

    }
    const decrementCounter=()=>{
        setCount(count=>count-1)

    }
    return( 
        <div>
             <div> My count is {count}</div>
             <button onClick={incrementCounter}>+</button>
             <button onClick={decrementCounter}>-</button>
        </div>
   
    )
    
//     const [studnet, setStudent]=useState(
// {    
//     name:"Samira Rassas",
//     courses: ["Math","FullStack"],
//     operation: "Register",
//     paid:true,
//     }       
//     );
//     const updateStudent=()=>{
//         setStudent(prevState => ({
//             ...prevState,
//             name: "Sandra",
//             courses: ["Math","FullStack"],
//             operation: "unRegister",
//             paid:false,
//         }));
// }
// return <div onClick={updateStudent}>Student equals {JSON.stringify(studnet)}</div>

}