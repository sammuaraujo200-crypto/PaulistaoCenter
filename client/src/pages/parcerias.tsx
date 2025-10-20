import React from "react";
import { Link } from "wouter";
import { Home } from "lucide-react";

const parceiros = [
  {
    name: "Suvinil",
    link: "https://www.suvinil.com.br",
  },
  {
    name: "Tigre",
    link: "https://www.tigre.com.br",
  },
  {
    name: "Votorantim Cimentos",
    link: "https://www.votorantimcimentos.com.br",
  },
  {
    name: "Representante João",
    link: "https://wa.me/5511999999999",
  },
  {
    name: "Center Dias",
    link: "https://www.centerdias.com.br",
  },
  {
    name: "Construtora Momento",
    link: "https://www.construtoramomento.com.br/",
  },
];

export default function Parcerias() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-16">
      {/* Topo fixo */}
      <header className="sticky top-0 bg-white/70 backdrop-blur-md shadow-sm z-10 px-6 py-4 flex items-center">
        <Link href="/">
          <a className="flex items-center text-blue-600 hover:text-blue-800 transition">
            <Home size={26} className="mr-2" />
            <span className="font-medium hidden sm:inline">Início</span>
          </a>
        </Link>
      </header>

      {/* Conteúdo */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-12 flex items-center justify-center gap-2">
          Nossos Parceiros 🤝
        </h1>

        {/* Grid de parceiros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {parceiros.map((p) => {
            const domain = new URL(p.link).hostname;

            return (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col items-center justify-center p-8 text-center"
              >
                <img
                  src={`https://logo.clearbit.com/${domain}`}
                  alt={p.name}
                  onError={(e) => {
                    e.currentTarget.src = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
                  }}
                  className="w-28 h-28 object-contain mb-4 transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <h2 className="text-lg font-semibold text-gray-800">{p.name}</h2>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
