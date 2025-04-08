// app/rituels/layout.tsx
import React, { ReactNode } from 'react';
import Nav from '../../components/layout/nav';

interface RituelsLayoutProps {
  children: ReactNode;
}

const RituelsLayout: React.FC<RituelsLayoutProps> = ({ children }) => {
  return (
<div className="flex h-screen gap-4">
{/* Barre de navigation */}
      <nav className="mt-3 w-1/4 p-3 border-r border-blue-300 overflow-y-auto rounded-lg shadow-sm">
        <Nav />
      </nav>

      {/* Contenu principal */}
      <main className="w-3/4 p-5 overflow-y-auto">
        <section>{children}</section>
      </main>
    </div>
  );
};

export default RituelsLayout;