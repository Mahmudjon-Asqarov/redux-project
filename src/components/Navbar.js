import React from "react";

function Navbar() {
  return (
    <div>
      <header className="d-flex px-4  flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4">Hot News</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link ">
              Features
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
