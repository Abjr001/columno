import React, { ElementType, ReactNode } from "react";

export type NavbarItemProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

function NavbarItem({ children, href, className }: NavbarItemProps) {
  return (
    <a
      href={href}
      className={`px-6 py-2.5 bg-gray-600/30 text-white/80 ${className && className}`}
    >
      {children}
    </a>
  );
}

export default NavbarItem;
