import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/homeGallery/logo-displayfair-3.png"
import NavbarIcons from "../Globals/NavbarIcons"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse retro-font",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
      {
        id: 3,
        path: "/contact",
        text: "contact",
      },
      {
        id: 4,
        path: "/gatsby",
        text: "gatsby",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-white navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="shrunk-logo" />
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon  " />
        </button>
        <div className={this.state.css}>
          {/* <ul className="navbar-nav  mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item ">
                  <Link
                    to={link.path}
                    className="nav-link text-capitalize navbar-links "
                  >
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul> */}
          {/* <NavbarIcons /> */}
        </div>
      </nav>
    )
  }
}
