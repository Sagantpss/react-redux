import React, { useState } from 'react';
function Users(props) {
    console.log(props);
    const [login, setLogin] = useState(false);


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    function loginHandel(e) {
        if (username.length < 3 || password.length < 3) {
            alert("Username and password should be more than 3 characters");
        }
        else {
            alert("You are logged in");
        }
        e.preventDefault();
    }
    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setUserErr(true);
        }
        else {
            setUserErr(false);
        }
        console.log(e.target.value.length);
        setUsername(item);
    }
    function passwordHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setPasswordErr(true);
        }
        else {
            setPasswordErr(false);
        }
        console.log(e.target.value.length);
        setPassword(item);
    }

    return (
        <div className="App">
            {login ? <p>You are logged in</p> : <p>You are logged out</p>}

            <form onSubmit={loginHandel}>
                <input type="text" placeholder="Username" onChange={userHandler} />
                {userErr ? <span style={{ color: "red" }}>"Username should be more than 3 characters"</span> : ""}
                <br /><br />
                <input type="password" placeholder="Password" onChange={passwordHandler} />
                {passwordErr ? <span style={{ color: "red" }}>"Password should be more than 3 characters"</span> : ""}
                <br /><br />
                <button type="submit">Login</button>
            </form>

            <h1 className="heading2">Hello, {props.name}</h1>
            <div style={{ background: "#1c9b00" }}>
                {/* <h2>Emai: {props.email}</h2>
            <h2>Phone: {props.phone}</h2>
            <h2>Address: {props.other.address}</h2> */}
            </div>
            <h2>This is the Users Page.</h2>
        </div>
    );
}

export default Users;