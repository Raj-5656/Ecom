import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, NavLink } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" style={{position:"sticky",top:"0",width:"100%",zIndex:100}}>
        <div className="container-fluid">
          <Link className="navbar-brand text-white fs-3" to="/">
            E-COM
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `mx-2 act fw-medium  nav-link text-white ${isActive ? "text-decoration-underline" : "text-decoration-none"}`
                  }
                  style={{fontSize:"17px"}}
                  
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <input
                  type="text"
                  name="search"
                  placeholder="Search for Products, Brands"
                  className="mx-2 mt-1  bg-white p-2 border-0"
                  style={{ height: "35px", width: "40vw" }}
                />
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `act nav-link fw-medium text-white ${isActive ? "text-decoration-underline" : "text-decoration-none"}`
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-check-fill"
                    viewBox="0 0 16 16"
                    className="mx-2 mb-1"
                  >
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
                  </svg>
                  Cart
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `act nav-link fw-medium text-white ${isActive ? "text-decoration-underline" : "text-decoration-none"}`
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                    className="mx-2 mb-1"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  Login
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link text-white"
                    role="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    id="dropdownMenuButton"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-three-dots-vertical"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                  </svg>
                </span>
                <ul className="dropdown-menu dropdown-menu-end"
                    style={{ position: "absolute", right: 0 }}
                aria-labelledby="dropdownMenuButton">
                    <li >
                        <NavLink className={({ isActive }) =>
                    `dropdown-item nav-link ${isActive ? "text-dark" : "text-white"}`
                  } >Profile</NavLink>
                    </li>
                    <li >
                        <NavLink className={({ isActive }) =>
                    `dropdown-item nav-link ${isActive ? "text-dark" : "text-white"}`
                  }>Settings</NavLink>
                    </li>
                    <li >
                        <NavLink className={({ isActive }) =>
                    `dropdown-item nav-link ${isActive ? "text-dark" : "text-white"}`
                  }>Logout</NavLink>
                    </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
