import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import Student from './Student';
import Employees from './Employees';
import ContextApi from './components/ContextApi';
import { Button } from 'react-bootstrap';

function App() {
  const [name, setName] = useState("Sagan");

  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const [status, setStatus] = useState(true);
  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }

  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [Tnc, setTnc] = useState(false);

  const employees=[
    {name: 'Sagan', age: 25 , email: "sagan@gmail.com"},
    {name: 'Sandeep', age: 20, email: "sandeep@gmail.com"},
    {name: 'Ravinder', age: 30, email: "ravinder@gmail.com"},
    {name: 'Ravi', age: 40, email: "ravi@gmail.com"},
  ];

  const inputRef=useRef(null);
  function handleInput(){
    console.log('input value');
    inputRef.current.value="Hello World - This is useRef Hook";
    inputRef.current.focus();
    inputRef.current.style.color="red";
    inputRef.current.style.backgroundColor="yellow";
    inputRef.current.style.fontSize="15px";
    inputRef.current.style.fontWeight="bold";
    inputRef.current.style.textAlign="center";
    inputRef.current.style.cursor="pointer";
    inputRef.current.style.border="2px solid red";
    inputRef.current.style.borderRadius="20px";
    inputRef.current.style.boxShadow="10px 10px 10px 10px red";
    inputRef.current.style.transform="scale(1.5)";
  }


  function getFormData(e) {
    e.preventDefault();
    console.log(username, age, Tnc, gender);
  }

  return (
    <div className="App">
      <Student /> <br></br>
      <h3>useRef Hook</h3>
      <input type='text' ref={inputRef} />
      <Button onClick={handleInput}>Input Handle</Button>
      <br></br>
      {
        employees.map((item,i)=>
          <Employees data={item}/>
        )
      }

      <ContextApi/>
      
      <header className="App-header">
        <Users name={name} />
        <button onClick={() => { setName("Kumar") }}>Update name</button>
        <>
          {/* OnChange event */}
          <p>Input value: {data}</p>
          <input type="text" onChange={getData} />


          {
            print ?
              <h2>Input value:{data}</h2>
              : null
          }
          <button onClick={() => setPrint(true)}>Print</button>

          <button onClick={() => setStatus(!status)}>Toggle</button>
          <button onClick={() => setStatus(true)}>Show</button>
          <button onClick={() => setStatus(false)}>Hide</button>
          {
            status ?
              <img src={logo} className="App-logo" alt="logo" />
              : null
          }
        </>

        <div>
          <h1>Fill the Form</h1>
          <form onSubmit={getFormData}>
            <label>User Name</label>
            <input type="text" onChange={(e) => setUserName(e.target.value)}></input>
            <br></br>
            <label>Age</label>
            <input type="text" onChange={(e) => setAge(e.target.value)}></input>
            <br></br>
            <label>Gender</label>
            <select onChange={(e) => setGender(e.target.value)}>
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <br></br>
            <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Agree to terms and conditions.</span>
            <button type="submit">Submit</button>
          </form>
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
