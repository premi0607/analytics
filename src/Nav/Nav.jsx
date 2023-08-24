import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css";

function Nav() {
  return (
    <div className="topnav">
      <Link to="/">Home</Link>
      <Link to="contact">Contact</Link>
      <Link to="setting">Settings</Link>
    </div>
  )
}

export default Nav
