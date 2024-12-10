import { useLocation, useSearchParams } from "react-router-dom";

function Filter() {
    const [searchParams,setSeachParams]=useSearchParams();
    const name=searchParams.get('name');
    const age=searchParams.get('age');
    const city=searchParams.get('city');
    const location= useLocation();
    console.log(location);
    return(
        <>
        <h1>Filter page</h1>
        <h2>Name:- {name}</h2>
        <h2>Age:- {age}</h2>
        <h2>City:- {city}</h2>
        <input type="text" onChange={(e)=>setSeachParams({name:e.target.value,city:'Hamirpur'})}/>
        <button onClick={()=>setSeachParams({age:27})}>Set age Params value</button>
        </>
    )
}

export default Filter;