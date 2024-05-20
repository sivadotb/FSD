import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "./AppContext";

function AppNav() {
  const { gblStoreName, cart } = useContext(AppContext);
  return (
    <>
      <div className="col-md-12">
        <nav className="navbar navbar-expand navbar-dark bg-success">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {gblStoreName()}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products-list">
                    Product Catalog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/your-cart">
                    Cart ({cart.length == null ? 0 : cart.length})
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default AppNav;
