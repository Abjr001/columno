import React from "react";
import NavbarItem from "./navbar-item";
import Columno from "@/public/assets/white-log-rmbg.png";
import Image from "next/image";
import TryItOut from "./try-but";

function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between items-center text-white">
        <li className=" w-1/12 flex justify-start items-center">
          <Image height={200} width={150} src={Columno} alt="logo" />{" "}
          {/* <span className="block text-xl">olumno</span> */}
        </li>
        <span className="flex">
          <div className="flex rounded-lg">
            {/* <NavbarItem href="/demo" className="rounded-l-lg">Try the app</NavbarItem> */}
            <NavbarItem href="/contact" className="rounded-r-lg">
              Contact Developer
            </NavbarItem>
          </div>
          <TryItOut className="ml-3" />
        </span>
      </ul>
    </nav>
  );
}

export default Navbar;
