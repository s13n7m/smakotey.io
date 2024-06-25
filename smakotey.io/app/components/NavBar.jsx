"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border border-r-transparent border-l-transparent border-[#33353f] bg-[#1f1f1f] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between px-4 pt-3 pl-5 pb-1">
        <Link href={"/"}>
          <Image
            src="/images/site-logo-1.png"
            alt="Logo"
            width={70}
            height={70}
            className="cursor-pointer"
          />
        </Link>
      
        <div id="mobile-menu" className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div id="navbar" className="menu hidden md:block md:w-auto pr-4">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-6 mb-2 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
