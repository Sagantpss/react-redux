import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
    const { Component } = props;
    const navigate = useNavigate();

    useEffect(()=>{
        let login = localStorage.getItem("login");
        if (!login){
            navigate('/login');  
        }
    });

    return (
        <>
        <h1>Protected Page Show</h1>
        <Component />
        </>
    )
}

export default Protected;