import React, { ElementType, ReactNode } from "react";

export type NavbarItemProps = {
  children: ReactNode;
  href: string;
};

function NavbarItem({ children, href }: NavbarItemProps) {
  return (
    <a href={href} className="px-6 py-2.5 bg-gray-600/30 text-white/80">
      {children}
    </a>
  );
}

export default NavbarItem;
