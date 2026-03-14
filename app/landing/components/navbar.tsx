import React from "react";
import NavbarItem from "./navbar-item";
import Columno from "@/public/assets/white-log-rmbg.png";
import Image from "next/image";
import TryItOut from "./try-but";

function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between items-center text-white">
        <li className="max-sm:h-16 max-sm:w-30">
          <Image height={200} width={150} src={Columno} alt="logo" />{" "}
        </li>
        <li className="flex">
          <div className="flex rounded-lg">
            {/* <NavbarItem href="/demo" className="rounded-l-lg">Try the app</NavbarItem> */}
            <NavbarItem
              href="/contact"
              className="rounded-lg"
            >
              Contact <span className="max-sm:hidden">Développeur</span>
            </NavbarItem>
          </div>
          <TryItOut className="hidden md:flex" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
