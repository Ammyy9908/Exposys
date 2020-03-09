import React from "react"
//import Link from "react-router-dom"


//const active={"borderBottom":"4px solid #ffffff"};
const brand_name="Exposys Data Labs";
const Navbar = () =>
{
    return <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item has-text-white" href="/Exposys">
      {brand_name}
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="#/">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu ">
    <div className="navbar-start">
      <a className="navbar-item has-text-white" href="/Exposys">
        Home
      </a>

      <a className="navbar-item has-text-white" href="/Training">
        Training
      </a>

      <a className="navbar-item has-text-white" href="/Research">
        Research & Dev
      </a>
      <a className="navbar-item has-text-white" href="/Promotions">
        Promotions
      </a>
      <a className="navbar-item has-text-white" href="/Training">
        Designing
      </a>
      <a className="navbar-item has-text-white" href="/About">
        About us
      </a>
      <a className="navbar-item has-text-white" href="/Contact">
        Contact
      </a>
      <a className="navbar-item has-text-white" href="/Careers">
        Careers
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-warning" href="#/">
            <strong>SUBSCRIBE</strong>
          </a>
          
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
}


export default Navbar;