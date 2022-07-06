import React from 'react';
import { Navbar, DarkThemeToggle } from 'flowbite-react';
import BrandIcon from './BrandIcon';

export default function Header() {
  return (
    <div className="backdrop-blur-sm bg-opacity-80 drop-shadow-md shadow-sm bg-light dark:bg-dark dark:bg-opacity-80 fixed z-10 w-full top-0">
      <Navbar fluid={false} rounded={false}>
        <BrandIcon />
        <div className="block md:hidden flex justify-center gap-2">
          <DarkThemeToggle />
          <button
            type="button"
            className="text-slate-700  bg-gradient-to-r from-[#69C9FF] to-[#00DACC] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Get Started
          </button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
          <div className="hidden md:block">
            <Navbar.Link href="/navbars">
              <DarkThemeToggle />
            </Navbar.Link>
          </div>
          <div className="hidden md:block">
            <Navbar.Link href="/navbars">
              <button
                type="button"
                className="text-slate-700  bg-gradient-to-r from-[#69C9FF] to-[#00DACC] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Get Started
              </button>
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
