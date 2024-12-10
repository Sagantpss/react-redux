import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Home</NavLink>
                    <NavLink className="navbar-brand" to="/about">About</NavLink>
                    <NavLink className="navbar-brand" to="/app">App</NavLink>
                    <NavLink className="navbar-brand" to="/contact">Contact Us</NavLink>
                    <NavLink className="navbar-brand" to="/login">Login</NavLink>
                    <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/nestedrouting">Nested Routing</NavDropdown.Item>
                        <NavDropdown.Item href="/filter">Filter</NavDropdown.Item>
                        <NavDropdown.Item href="/apipage">API</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/previousprops">Previous Props</NavDropdown.Item>
                        <NavDropdown.Item href="/react-redux">Redux</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </nav>
        </>
    )
}

export default Navbar;