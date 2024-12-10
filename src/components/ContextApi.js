import React from 'react';
const ContextApi = (props) => {
    // console.log(props.dataContext.fullname);
    const  {info} = props; 
    
    return (
        <>
        <h2>Context Api Data</h2>
        <h4>Name:- {info.fullname}</h4>
        <h4>Age:- {info.age}</h4>
        <h4>Email:- {info.email}</h4>
        </>
    )
}

export default ContextApi;