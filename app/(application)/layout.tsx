import Sidebar from "@/components/navigation/sidebar";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Sidebar />
      {children}
      Le layout s&rsquo;applique
    </div>
  );
}

export default Layout;
