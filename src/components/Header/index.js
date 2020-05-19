import React from "react";

import logo from "../../utils/svg/logo.svg";
import { Link } from "react-router-dom";
import { HeaderComponent, Logo, HeaderTop } from "./styles";

export default function Header() {
  return (
    <HeaderComponent className="header-container">
      <HeaderTop className="header-top">
        <Logo src={logo} alt="Netflix Logo" />
        <Link className="signIn-btn">Sign In</Link>
      </HeaderTop>
    </HeaderComponent>
  );
}
