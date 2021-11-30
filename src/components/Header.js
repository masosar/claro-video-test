import React from "react";
import claroLogo from "../imgs/clarovideo-logo.svg";
import Search from "./Search";

const Header = () => {
  return (
    <header className="clarovideo-header">
      <div className="menunav--logo">
        <img src={claroLogo} alt="Claro Video Logo" width="213" />
      </div>
      <div className="menunav--buscar"></div>
      <Search />
    </header>
  );
};

export default Header;