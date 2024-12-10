import { Fragment } from "react";

function Employees(props) {
    return (
        <Fragment>
            <span>Employee name:-{props.data.name}</span><br />
            <span>Employee Age:-{props.data.age}</span><br />
            <span>Employee Email:-{props.data.email}</span><br />
        </Fragment>
    )
}

export default Employees;