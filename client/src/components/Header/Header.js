import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <div>
    <header className="bg-dark mb-4" >
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark">
            <NavLink
              exact
              activeClassName="active"
              className="navbar-brand"
              to="/"
            >
              Home
            </NavLink>

            <ul className="navbar-nav mr-10">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/sigIn"
                >
                  Entrar
                </NavLink>
              </li>
                            </ul>
                            <ul className="navbar-nav mr-10">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/logIn"
                >
                  Registrarse
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
        </div>
    )
}
export default Header