import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap"

function PreviousProps() {
 const [count, setCount] = useState(0);
 const lastVal=useRef();
 useEffect(()=>{
    lastVal.current=count;
    console.log("Last Props",lastVal.current);
 })
const PreviousProps = lastVal.current;
 return (
   <div>
     <h1 className="heading1">Current Counter {count}</h1>
     <h1 className="heading1">Previous Counter {PreviousProps}</h1>
     <Button onClick={() => { setCount(Math.floor(Math.random()*10))}}>Update Counter</Button>
   </div>
 )
}
export default PreviousProps;