import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const login = () =>{
        localStorage.setItem("login",true);
        navigate('/about');
    }
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem("login");
        if (login){
            navigate('/');  
        }
    });

    return (
        <>
        <h1>Login</h1>
        <input type="text" placeholder="Enter Username" /><br />
        <input type="password" placeholder="Enter Password" /><br />
        <button onClick={login}>Login</button>
        </>
    )
}
export default Login;