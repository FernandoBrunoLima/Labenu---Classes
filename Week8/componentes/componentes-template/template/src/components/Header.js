import React from "react";
import Logo from "../img/logo.png";

export default function Header() {
  return (
    <div className="Header">
      <img className="Logo" src={Logo} />
    </div>
  );
}
