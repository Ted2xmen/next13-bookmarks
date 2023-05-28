import React from "react";
import NavItem from "./navItem";
import Logo from "../Logo";
import Modal from "../Modals/modal";

const Navigation = () => {
  return (
    <nav className="md:flex justify-center md:justify-between flex-col md:flex-row flex-wrap w-full">
      <Logo />
      <ul className="flex items-center mt-4 md:mt-0">
        <NavItem href="/" title="Home" />
        <NavItem href="/fav" title="Favorites" />
        <NavItem href="/about" title="Contact" />
        <Modal />
      </ul>
    </nav>
  );
};

export default Navigation;
