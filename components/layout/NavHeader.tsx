//@/components/layout/NavHeader.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react"; 

function NavHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md md:shadow-none sticky top-0 z-40 md:static">
      <div className="container mx-auto px-6 py-3 md:py-0 flex justify-between items-center md:block">
        {/* Navigation pour les écrans desktop */}
        <div className="hidden md:flex justify-center items-center space-x-6 py-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            Accueil
          </Link>
          <Link
            href="/rituels"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            Rituels
          </Link>
          <Link
            href="/frame"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            Apprentissage
          </Link>
          <Link
            href="/access" // Modification du lien pour plus de clarté
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"          >
            Obtenir l'accès
          </Link>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden flex justify-end">
          <button onClick={toggleMobileMenu} className="text-blue-600 hover:text-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-md py-2 md:hidden">
          <div className="container mx-auto px-6 flex flex-col space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Accueil
            </Link>
            <Link href="/rituels" className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Rituels
            </Link>
            <Link href="/frame" className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Apprentissage
            </Link>
            <Link href="/access" className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Obtenir un accès
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavHeader;