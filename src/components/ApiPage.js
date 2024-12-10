import { useEffect, useState } from "react";
import { Form, Table, Button } from "react-bootstrap";

function ApiPage() {

    const [data, setData] = useState([]);
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [userId,setUserId]= useState(null);

    useEffect(() => {
        getList();
    }, [])
    // console.log("DATA", data);

    function getList() {
        fetch('http://localhost:8000/users').then((result) => {
            result.json().then((resp) => {
                // console.log(resp.users);
                setData(resp);
                setFirstname(resp[0].firstName)
                setLastname(resp[0].lastName)
                setEmail(resp[0].email)
                setRole(resp[0].role)
                setUserId(resp[0].id)
            })
        })
    }

    // Delete user 
    function deleteUser(id) {
        fetch(`http://localhost:8000/users/${id}`, {
            method: "DELETE"
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                getList();
            })
        })
    }

    function selectUser(id) {
        console.log(data[id-1])
        setFirstname(data[id-1].firstName)
        setLastname(data[id-1].lastName)
        setEmail(data[id-1].email)
        setRole(data[id-1].role)
        setUserId(data[id-1].id)
    }

    // Update user Data
    function updateUser() {
        console.log(firstName,lastName,email,role,userId)
        let item = {firstName,lastName,email,role,userId}
        fetch(`http://localhost:8000/users/${userId}`, {
            method: "PUT",
            headers: {
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                getList();
            })
        })
    }

    return (
        <>
            <h1>Api Page</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your first name" value={firstName} onChange={(e)=>setFirstname(e.target.value)}/>
                </Form.Group>

                {/* Last Name */}
                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name" value={lastName} onChange={(e)=>setLastname(e.target.value)}/>
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>

                {/* Role */}
                <Form.Group className="mb-3" controlId="formRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="text" placeholder="Enter your role" value={role} onChange={(e)=>setRole(e.target.value)}/>
                </Form.Group>
                <Button onClick={updateUser}>Update User Data</Button>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Birth date</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.birthDate}</td>
                                    <td><img src={item.image} alt="Product thumbnail" tabIndex="0" aria-label="Product thumbnail" /></td>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                    <td>{item.password}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.role}</td>
                                    <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                                    <td><button onClick={() => selectUser(item.id)}>Update</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
export default ApiPage;