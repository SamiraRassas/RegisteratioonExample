import React from "react";
// import {Parent} from 'Parent.js';

export default function Child({childToParent}){
    const data='Hello World';
    return (
        <div>
           <button onClick={()=> childToParent(data)}>CLICK</button> 
        </div>
    )
 }