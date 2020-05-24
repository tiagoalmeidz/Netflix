import React from "react";

import logo from "../../utils/svg/logo.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { HeaderComponent, Logo, Title, SubTitle } from "./styles";

export default function Header() {
  return (
    <HeaderComponent className="header-container">
      <div className="header-top">
        <Logo src={logo} alt="Netflix Logo" />
        <Link className="signIn-btn" to="#">
          Sign In
        </Link>
      </div>
      {/* Header Content */}
      <div className="header-content">
        <Title>See what's next.</Title>
        <SubTitle>WATCH ANYWHERE. CANCEL ANYTIME.</SubTitle>
        <Button className="main-offer-btn" to="#" primary>
          try it now
          <MdKeyboardArrowRight className="icon-arrow-right" size={37} />
        </Button>
      </div>
    </HeaderComponent>
  );
}
