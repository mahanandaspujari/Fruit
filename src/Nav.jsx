import React from 'react';
import './CSS/style.css'

const Nav = ({ var1 }) => {
  return (
    <>
    <div className="col-12 p-0">
      <nav className="navbar navbar-expand-lg section fixed-top">

        <div className="container-fluid">
        <img src="../public/images/logo.png" alt="" />
          <button
            className="navbar-toggler"
            id="btn1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse mt-2" id="navbarNavDropdown">
            {var1.map((item, index) => (
              <ul className="navbar-nav snip1217 ms-auto" key={index}>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#home-bg">
                    {item.home}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    {item.aboutus}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#education">
                    {item.fruits}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    {item.blogs}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    {item.contactus}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </nav>
    </div>
    </>
    
    
  );
};

export default Nav;
