import React, { ReactNode } from 'react';
import Nav from '../nav';

interface RituelsLayoutProps {
  children: ReactNode;
}

const RituelsLayout: React.FC<RituelsLayoutProps> = ({ children }) => {
  return (
    <div className="secondary-layout">
      

      <main className="md:flex justify-between items-center m-5 mt-36">
   
       <nav ><Nav /></nav>
       <section>{children} </section>
      </main>

    </div>
  );
};

export default RituelsLayout;