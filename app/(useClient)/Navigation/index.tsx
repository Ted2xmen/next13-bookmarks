import React from "react";
import NavItem from "./navItem";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-2">
        <NavItem href="/" title="Home" />
        <NavItem href="/fav" title="Favorites" />
        <NavItem href="/about" title="About" />
      </ul>
    </nav>
  );
};

export default Navigation;
