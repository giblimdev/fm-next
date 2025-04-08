"use client";
import Link from "next/link";
import Image from "next/image";



function Header() {
 
  



  return (
    <div className="flex justify-between items-center bg-blue-400 p-3">
      <div>
        <Link href={"/"}>
          <Image
            className="logo"
            src="/téléchargement.jpeg"
            alt="logo GLNF"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className=" rounded-2xl p-3 bg-blue-300 flex items-center gap-4">
        <button className="btn ">
          <Link href="/">Accueil</Link>
        </button>
        <button className="btn">
          <Link href="/rituels">Rituels</Link>
        </button>
        <button className="btn">
          <Link href="/frame">Apprentissage</Link>
        </button>
        <button className="btn">
          <Link href="/">Obtenir un acces</Link>
        </button>
      </div>
      <div>
      
          <Image
            className="logo"
            src="/Logo-Grande-Loge-de-Marque-de-France-Reunie.png"
            alt="logo GLMFR"
            width={120}
            height={120}
          />
       
      </div>
    </div>
  );
}

export default Header;

