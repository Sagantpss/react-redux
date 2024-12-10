import React, { useEffect } from "react";
import { Table } from 'react-bootstrap';

function Student() {
    const students = [
        {
            name: "Sagan",
            age: 25,
            email: "sagan@gmail.com",
            address: [
                { Hno: "123", city: "Hamirpur", state: "Himachal Pradesh", country: "India" },
                { Hno: "456", city: "Hamirpur", state: "Himachal Pradesh", country: "India" },
                { Hno: "789", city: "Hamirpur", state: "Himachal Pradesh", country: "India" }
            ]
        },
        {
            name: "Sandeep",
            age: 20,
            email: "sandeep@gmail.com",
            address: [
                { Hno: "123", city: "Amritsar", state: "Punjab", country: "India" },
                { Hno: "456", city: "Amritsar", state: "Punjab", country: "India" },
                { Hno: "789", city: "Amritsar", state: "Punjab", country: "India" }
            ]
        },
        {
            name: "Ravinder",
            age: 30,
            email: "ravinder@gmail.com",
            address: [
                { Hno: "123", city: "Hamirpur", state: "Himachal Pradesh", country: "India" },
                { Hno: "456", city: "Hamirpur", state: "Himachal Pradesh", country: "India" },
                { Hno: "789", city: "Hamirpur", state: "Himachal Pradesh", country: "India" }
            ]
        },
        {
            name: "Rajesh",
            age: 25,
            email: "rajesh@gmail.com",
            address: [
                { Hno: "123", city: "Chandigarh", state: "Chandigarh", country: "India" },
                { Hno: "456", city: "Chandigarh", state: "Chandigarh", country: "India" },
                { Hno: "789", city: "Chandigarh", state: "Chandigarh", country: "India" }
            ]
        }
    ];
    
    useEffect(() => {
        console.log("useEffect");
    });

    return (
        <div className="App-headers">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                {
                    students.map((item, i) =>
                        <tbody>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.email}</td>
                                <td>
                                <Table variant="dark" striped>
                                    <tbody>
                                    {
                                    item.address.map((data,j) =>
                                        <tr key={j}>
                                            <td>{data.Hno}</td>
                                            <td>{data.city}</td>
                                            <td>{data.state}</td>
                                            <td>{data.country}</td>
                                        </tr>
                                    )}
                                    </tbody>
                                </Table>
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    )
}

export default Student;