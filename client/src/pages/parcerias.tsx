import { Home } from "lucide-react";
import React from "react";
import { Link } from "wouter";

const parceiros = [
  {
    name: "Suvinil",
    logo: "/assets/logos/suvinil.png",
    link: "https://www.suvinil.com.br",
  },
  {
    name: "Tigre",
    logo: "/assets/logos/tigre.png",
    link: "https://www.tigre.com.br",
  },
  {
    name: "Votorantim Cimentos",
    logo: "/assets/logos/votorantim.png",
    link: "https://www.votorantimcimentos.com.br",
  },
  {
    name: "Representante João",
    logo: "/assets/logos/joao.png",
    link: "https://wa.me/5511999999999",
  },
   {
    name: "Center Dias",
    logo: "/logos/logo-center-dias.png",
    link: "https://www.centerdias.com.br",
  },
];

export default function Parcerias() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Ícone de Home */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition">
            <Home className="w-6 h-6" />
          </a>
        </Link>
      </div>

      {/* Título */}
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Nossos Parceiros 🤝
      </h1>

      {/* Cards de parceiros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {parceiros.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={p.logo}
              alt={p.name}
              className="w-32 h-32 object-contain mb-4"
              onError={(e) =>
                ((e.target as HTMLImageElement).src = "/assets/logos/placeholder.png")
              }
            />
            <h2 className="text-lg font-semibold text-gray-800">{p.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}
