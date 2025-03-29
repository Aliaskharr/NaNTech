import React from 'react'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark py-3 px-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-5">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
