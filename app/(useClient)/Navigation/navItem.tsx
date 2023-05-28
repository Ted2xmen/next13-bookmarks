"use client";
import Link from "next/link";
import React from "react";

type NavProps = {
  href: string;
  title: string;
};

const NavItem = ({ href, title }: NavProps) => {
  return (
    <Link href={href} className="flex items-center space-x-1">
      <li className="hover:bg-emerald-200 px-2 p-2 lg:px-3">
        <h2 className="text-sm font-normal text-emerald-800">{title}</h2>
      </li>
    </Link>
  );
};

export default NavItem;
