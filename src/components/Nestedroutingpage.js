import { Link, Outlet } from "react-router-dom";

function Nestedroutingpage() {
    return (
        <>
        <h1>Nested Routing Page</h1>
        <p>This is nested routing page.</p>
        <p>Below we show the nested routing data.</p>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
        <Link to="/nestedrouting/facebookpage">Facebook</Link><br />
        <Link to="/nestedrouting/youtubepage">YouTube</Link><br />
        <Link to="/nestedrouting/instagrampage">Instagram</Link><br />
        </div>
        </nav>
        <Outlet />
        </>
    )
}

export default Nestedroutingpage;