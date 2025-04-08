//@/app/components/layout/UserButton.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuthUser } from "@/stores/useAuthUser"; // Assurez-vous que le chemin vers votre store est correct
import { useState, useRef, useEffect } from "react";
import { User, LogOut } from "lucide-react"; // Import des icônes Lucide

const defaultAvatarPath = "/default-avatar.png"; // Chemin vers votre image d'avatar par défaut dans le dossier public

function UserButton() {
  const { isAuthenticated, user, logout } = useAuthUser(); // Assurez-vous que votre store a une fonction logout
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative m-4">
      {isAuthenticated ? (
        // Afficher l'avatar de l'utilisateur connecté avec un menu déroulant
        <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
          <Image
            src={user?.avatarUrl || defaultAvatarPath}
            alt={user?.name || "Avatar"}
            width={30}
            height={30}
            className="rounded-full shadow-md cursor-pointer"
          />
          {user?.name && (
            <span className="ml-2 text-sm font-semibold text-gray-700 hidden md:inline">
              {user.name}
            </span>
          )}
        </button>
      ) : (
        // Afficher le bouton de connexion
        <Link
          href="/auth/login"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md"
        >
          Connexion
        </Link>
      )}

      {/* Menu déroulant */}
      {isAuthenticated && isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-50"
        >
          <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">
            <User className="inline-block mr-2 h-4 w-4 text-blue-500" />
            Profil
          </Link>
          <button
            onClick={handleLogout}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 w-full text-left focus:outline-none"
          >
            <LogOut className="inline-block mr-2 h-4 w-4 text-red-500" />
            Déconnexion
          </button>
        </div>
      )}
    </div>
  );
}

export default UserButton;