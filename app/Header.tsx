"use client";

import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo GLNF */}
        <div className="hover:scale-105 transition-transform duration-300">
          <Link href="/">
            <Image
              src="/téléchargement.jpeg"
              alt="logo GLNF"
              width={100}
              height={100}
              className="rounded-lg shadow-md"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-white hover:text-blue-100 font-semibold text-lg transition-colors duration-300"
          >
            Accueil
          </Link>
          <Link
            href="/rituels"
            className="text-white hover:text-blue-100 font-semibold text-lg transition-colors duration-300"
          >
            Rituels
          </Link>
          <Link
            href="/frame"
            className="text-white hover:text-blue-100 font-semibold text-lg transition-colors duration-300"
          >
            Apprentissage
          </Link>
          <Link
            href="/"
            className="text-white hover:text-blue-100 font-semibold text-lg transition-colors duration-300"
          >
            Obtenir un accès
          </Link>
        </nav>

        {/* Connexion Button and Logo GLMFR */}
        <div className="flex items-center space-x-6">
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors duration-300 shadow-md">
            <Link href="/">Connexion</Link>
          </button>
          <div className="hover:scale-105 transition-transform duration-300">
            <Image
              src="/Logo-Grande-Loge-de-Marque-de-France-Reunie.png"
              alt="logo GLMFR"
              width={120}
              height={120}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;