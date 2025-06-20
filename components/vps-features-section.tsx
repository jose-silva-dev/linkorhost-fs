"use client"

import { Zap, HardDrive, Shield, Gamepad2, Clock, Headphones } from "lucide-react"

const features = [
  {
    icon: <Zap className="w-8 h-8 text-[#F04339]" />,
    title: "AMD Ryzen",
    description:
      "Ofereça a melhor experiência de jogo com nossos servidores VPS equipados com processadores AMD Ryzen, otimizados para jogos exigentes e altas cargas de trabalho, garantindo desempenho superior.",
  },
  {
    icon: <HardDrive className="w-8 h-8 text-[#F04339]" />,
    title: "SSD NVMe",
    description:
      "Aproveite a velocidade do SSD NVMe em nossa VPS Gamer, proporcionando tempos de carregamento rápidos e a melhor performance para servidores de jogos e aplicações pesadas.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#F04339]" />,
    title: "Proteção DDoS",
    description:
      "Mantenha seus servidores de jogos seguros com nossa proteção DDoS avançada. Garantimos que seu servidor esteja sempre protegido contra ataques, proporcionando uma jogabilidade sem interrupções.",
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-[#F04339]" />,
    title: "Exitlag",
    description:
      "Adquira a melhor plataforma de solução de lags do mercado, você pode incluir a Exitlag adicional no seu serviço, juntamente com a Linkor.",
  },
  {
    icon: <Clock className="w-8 h-8 text-[#F04339]" />,
    title: "Baixa latência",
    description:
      "Com servidores VPS em São Paulo, garantimos baixa latência e conexão rápida para jogadores em todo o Brasil, oferecendo uma experiência de jogo sem lag e com alto desempenho.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-[#F04339]" />,
    title: "Suporte",
    description:
      "Com 99,9% de uptime, seus servidores estarão sempre online, permitindo que você aproveite seus jogos e aplicações sem falhas, dia e noite.",
  },
]

export function VPSFeaturesSection() {
  return (
    <section className="py-20 bg-[#0f0f1a] w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-4">
                {feature.icon}
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
