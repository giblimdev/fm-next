// @/components/Pagination.tsx
'use client'

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // Importez usePathname
import { listA } from "@/lib/ListArche"; // Importez la liste des pages

const NavArche: React.FC = () => {
  // Récupérer l'URL actuelle
  const currentPageUrl = usePathname();

  // Trouver l'index de la page actuelle dans la liste
  const currentIndex = listA.findIndex((page) => page.url === currentPageUrl);

  // Vérifier si la page précédente existe
  const hasPrevious = currentIndex > 0;
  // Vérifier si la page suivante existe
  const hasNext = currentIndex < listA.length - 1;

  return (
    <div className="flex justify-center items-center space-x-4 my-8">
      {/* Bouton "Précédent" */}
      {hasPrevious && (
        <Link href={listA[currentIndex - 1].url}>
          <p className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Précédent
          </p>
        </Link>
      )}

      {/* Numéro de la page en cours */}
      <span className="px-4 py-2 bg-blue-500 text-white rounded">
        Page {currentIndex + 1} / {listA.length}
      </span>

      {/* Bouton "Suivant" */}
      {hasNext && (
        <Link href={listA[currentIndex + 1].url}>
          <p className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Suivant
          </p>
        </Link>
      )}
    </div>
  );
};

export default NavArche;