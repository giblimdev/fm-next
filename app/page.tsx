import Image from "next/image";

export default function Home() {
  const rituals = [
    {
      title: "Rituel du Premier Grade",
      image: "/emul-app.png",
      alt: "Rituel Premier Grade",
    },
    {
      title: "Rituel du Deuxième Grade",
      image: "/emul-cp.png",
      alt: "Rituel Deuxième Grade",
    },
    {
      title: "Rituel du Troisième Grade",
      image: "/emule-m.png",
      alt: "Rituel Troisième Grade",
    },
    {
      title: "Rituel de l'Arche",
      image: "/arche.png",
      alt: "Rituel de l'Arche",
    },
    {
      title: "Rituel de la Marque",
      image: "/MARK-TAB-M.jpeg",
      alt: "Rituel de la Marque",
    },
    {
      title: "Rituel des Nautoniers",
      image: "/cahier-m.png",
      alt: "Rituel des Nautoniers",
    },
    {
      title: "Rituel des KT",
      image: "/kt0.png",
      alt: "Rituel des KT",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-8 pb-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">
          Rituels Maçonniques
        </h1>
        <p className="text-lg text-indigo-600">
          Découvrez les rituels des différents grades
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {rituals.map((ritual, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={ritual.image}
                alt={ritual.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {ritual.title}
              </h2>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Voir le rituel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
