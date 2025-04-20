"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo GLNF */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Accueil">
            <Image
              src="/téléchargement.jpeg"
              alt="Logo GLNF"
              width={80}
              height={80}
              className="rounded-full border-2 border-white hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>
        </div>

        {/* Navigation principale - Desktop */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link
            href="/"
            className="px-4 py-2 rounded-lg text-white font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center"
          >
            Accueil
          </Link>
          <Link
            href="/rituels"
            className="px-4 py-2 rounded-lg text-white font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center"
          >
            Rituels
          </Link>
          <Link
            href="/frame"
            className="px-4 py-2 rounded-lg text-white font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center"
          >
            Apprentissage
          </Link>
        </nav>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button
            className="text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Menu mobile"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Logo GLMFR */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Accueil">
            <Image
              src="/Logo-Grande-Loge-de-Marque-de-France-Reunie.png"
              alt="Logo GLMFR"
              width={90}
              height={90}
              className="hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Menu mobile - Contenu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <nav className="flex flex-col py-2 px-4 space-y-2">
            <Link
              href="/"
              className="px-4 py-3 rounded-lg text-white font-medium hover:bg-blue-800 transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Accueil
            </Link>
            <Link
              href="/rituels"
              className="px-4 py-3 rounded-lg text-white font-medium hover:bg-blue-800 transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Rituels
            </Link>
            <Link
              href="/frame"
              className="px-4 py-3 rounded-lg text-white font-medium hover:bg-blue-800 transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Apprentissage
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
