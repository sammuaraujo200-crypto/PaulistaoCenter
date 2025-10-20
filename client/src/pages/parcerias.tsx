import React from "react";
import { Link } from "wouter";

const parceiros = [
  {
    name: "Suvinil",
    logo: "/logos/suvinil.png",
    link: "https://www.suvinil.com.br",
  },
  {
    name: "Tigre",
    logo: "/logos/tigre.png",
    link: "https://www.tigre.com.br",
  },
  {
    name: "Votorantim Cimentos",
    logo: "/logos/votorantim.png",
    link: "https://www.votorantimcimentos.com.br",
  },
  {
    name: "Representante João",
    logo: "/logos/joao.png",
    link: "https://wa.me/5511999999999",
  },
  {
    name: "Center dias",
    logo: "/assets/logos/logo-center-dias.png",
    link: "https://www.centerdias.com.br",
  },
];

export default function Parcerias() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Botão voltar */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link href="/">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            ← Voltar para a página inicial
          </button>
        </Link>
      </div>

      {/* Título */}
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Nossos Parceiros
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
            />
            <h2 className="text-lg font-semibold text-gray-800">{p.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}
