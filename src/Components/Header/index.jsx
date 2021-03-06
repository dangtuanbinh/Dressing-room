import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            March21
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Clothes
                  </a>
                  <a className="dropdown-item" href="#">
                    Acessories
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Shoes
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Deal
                </a>
              </li>
            </ul>
            
            <form className="form-inline my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Find your clothes"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Find
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
