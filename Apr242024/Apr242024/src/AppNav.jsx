import { Link, Outlet } from 'react-router-dom';
import SideBar from "./SideBar.jsx";
function AppNav() {
   return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">GUVI</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="logout">Logout</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SideBar />
      <Outlet />
    </>
  )
}

export default AppNav
