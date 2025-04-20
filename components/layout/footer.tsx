import React from "react";

function footer() {
  return (
    <div>
      {/* Pied de page optionnel */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ordre Maçonnique du Temple - Tous droits
        réservés
      </footer>
    </div>
  );
}

export default footer;
