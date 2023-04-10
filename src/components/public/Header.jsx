import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Doctor+
        </a>
        <ul class="navbar-nav ms-auto">
          <li className="nav-item">
          <Link to="/contact" class="nav-link active" >
              <button className="btn btn-dark"> contact</button>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/services" class="nav-link active" >
              <button className="btn btn-dark"> service</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/auth/login" class="nav-link active" >
              <button className="btn btn-dark"> Admin</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
