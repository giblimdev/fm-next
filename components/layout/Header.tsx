//@/components/layout/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import NavHeader from "./NavHeader";
import UserButton from "./UserButton"; // Importez le composant UserButton

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-3 py-3 md:py-3 flex justify-between">
        {/* Logo GLNF */}
        <div className="hover:scale-105 transition-transform duration-300">
          <Link href="/" className="align-middle">
            <Image
              src="/glnf.jpg"
              alt="logo GLNF"
              width={50}
              height={50}
              className="rounded-full shadow-md mr-2"
            />
          </Link>
        </div>

        {/* Navigation */}
          <NavHeader />
        {/* User Button  */}
        <UserButton /> 
        {/*Logo GLMFR */}
        
          <div className="hover:scale-105 transition-transform duration-300 opacity-70">
            <Image
              src="/Logo-Grande-Loge-de-Marque-de-France-Reunie.png"
              alt="logo GLMFR"
              width={60}
              height={60}
              className="rounded-full shadow-md"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;