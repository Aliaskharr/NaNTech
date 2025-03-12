import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container py-3">
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item me-5">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item me-5">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li class="nav-item me-5">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/courses">Courses</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet></Outlet>
        </>
    )
}

export default Navbar;