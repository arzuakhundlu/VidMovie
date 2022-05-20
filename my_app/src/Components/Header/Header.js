import React from "react";
import './Header.css';
import logo from "./logo/logo-default.png";


export default function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="vidmov" />
    </header>
  );
}
