"use client";
import NavBar from "@/components/navigations/NavBar";
import Sidebar from "@/components/navigations/Sidebar";
import { useState } from "react";

function Menubar() {
  const [Open, setOpen] = useState(false);
  return (
    <div className="w-full relative">
      <NavBar isOpen={Open} setIsOpen={setOpen} />
      <div className="w-full fixed top-0 left-0 z-50">
        <Sidebar isOpen={Open} setIsOpen={setOpen} />
      </div>
    </div>
  );
}

export default Menubar;
