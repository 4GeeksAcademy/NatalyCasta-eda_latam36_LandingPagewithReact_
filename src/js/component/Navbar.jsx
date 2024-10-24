import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark"  style = {{width: "100%", padding: "10px 94px 10px 105px"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> 
            <span  style = {{width: "30", height: "24"}} className="d-inline-block align-text-top text-light">
              Start Bootstrap
            </span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">Contact</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
  )
}

export default Navbar