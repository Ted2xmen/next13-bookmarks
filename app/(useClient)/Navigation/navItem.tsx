"use client";
import Link from "next/link";
import React from "react";

type NavProps = {
  href: string;
  title: string;
};

const NavItem = ({ href, title }: NavProps) => {
  return (
    <Link href={href} className="flex items-center space-x-3">
      <li className="hover:bg-violet-100 px-4 p-3 rounded-md">
        <h2 className="text-md font-semibold text-violet-600">{title}</h2>
      </li>
    </Link>
  );
};

export default NavItem;
