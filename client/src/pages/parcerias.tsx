import React from "react";

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
    logo: "logo-center-dias.png",
    link: "https://centerdias.com.br/",
  },
];

export default function Parcerias() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-10">
        Nossos Parceiros
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {parceiros.map((parceiro, index) => (
          <a
            key={index}
            href={parceiro.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={parceiro.logo}
              alt={parceiro.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <p className="text-lg font-semibold text-gray-800">
              {parceiro.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
