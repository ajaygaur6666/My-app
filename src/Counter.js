import React from "react";
import { useState } from "react";

export default function Counter(){
      const[num,setNum] = useState(1);
        function Inc(){
            setNum(num+1)
        }
        function Dec(){
            setNum(num-1)
        }

        return(
        <>
      <div>MYnuber{num}</div>
      <button onClick={Dec}>-</button>
      <button onClick={Inc}>+</button>
        </>
        )
    
}