"use client"

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { NAV_LINKS } from "@/constants";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
        <Image src="/letscamp.png" alt="logo" width={400} height={100} />

        </Link>
        
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={`#${link.href}`}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
             // scroll={false} // Prevents default scroll behavior
             
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          {/* <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          /> */}
        </div>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Image
              src="/close.svg"
              alt="close menu"
              width={24}
              height={24}
            />
          </button>
        </div>

        <ul className="p-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={`#${link.href}`}
                className="text-gray-700 hover:text-gray-900 block py-2 transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            {/* <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
            /> */}
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default NavBar;