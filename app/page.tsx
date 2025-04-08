// app/page.tsx
// Page d'accueil de l'application affichant une liste de produits (livres) sous forme de cartes modernes et responsives avec une taille d'image améliorée pour la lisibilité.
// Dépendances : next/image, next/link, @/components/ui/card (shadcn/ui), @/components/ui/button (shadcn/ui).

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Définition d'un type pour représenter les informations d'un produit (livre)
interface Product {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  link: string;
}

// Données statiques pour simuler les produits (livres) (à remplacer par des données dynamiques depuis votre backend)
const products: Product[] = [
  {
    id: "emul-app",
    name: "Emulation Rituel du premier grade",
    description: "",
    imagePath: "/emul-app.png",
    link: "/products/emul-app",
  },
  {
    id: "emul-cp",
    name: "Emulation Rituel du deuxième grade",
    description: "",
    imagePath: "/emul-cp.png",
    link: "/products/emul-cp",
  },
  {
    id: "emul-m",
    name: "Emulation Rituel du troisième grade",
    description: "",
    imagePath: "/emul-m.png",
    link: "/products/emul-m",
  },
  {
    id: "arche",
    name: "Arche royal Domatique Rituel de compagnon",
    description: "",
    imagePath: "/arche.png",
    link: "/products/arche",
  },
  {
    id: "MMM",
    name: "Rituel Maitre MAçon de marque",
    description: "Encore un livre fascinant avec une intrigue pleine de rebondissements.",
    imagePath: "/emul-app.png",
    link: "/products/emul-app-2",
  },
  {
    id: "bar",
    name: "Rituem des Nautaunier ",
    description: "Le livre 6 vous transportera dans un univers riche et imaginatif.",
    imagePath: "/emul-cp.png",
    link: "/products/emul-cp-2",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-center mb-8">Découvrez Les rituels</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={product.link} className="block">
              <Card className="h-full flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold truncate">{product.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground truncate">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative overflow-hidden rounded-md">
                  <div className="h-40 w-25 relative"> {/* Ajout d'une div avec hauteur et largeur fixes */}
                    <Image
                      src={product.imagePath}
                      alt={product.name}
                      fill
                      style={{ objectFit: "contain" }}
                      className="transition-opacity duration-300 hover:opacity-90"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full m-3">Abtenir l'acces</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

