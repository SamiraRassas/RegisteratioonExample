import {useState} from "react";
import Child from "./Child.js";
export function Parent(){
    const [data, setData]= useState('');
    const childToParent= (childdata) => {
        setData(childdata);
    }
    return (
        <div>
            {data}
            <div>
                <Child childToParent={childToParent} />
            </div>
            
        </div>
    )

}
