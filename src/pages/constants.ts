import type { FooterInfoSection, ServiceCardProps, TestimonialProps } from "../types/types";

export const services: ServiceCardProps[] = [
  { id: 1, title: "Corte de Pelo", description: "Corte a tijera con lavado, peinado y productos de acabado", image: "haircut.jpg", price: 16 },
  { id: 2, title: "Corte Máquina", description: "Lavado a uno o dos números marcado de cuello y patillas", image: "machine-cut.jpg", price: 14 },
  { id: 3, title: "Afeitado Clásico", description: "Afeitado con navaja y toalla caliente", image: "classic-shave.png", price: 13 },
  { id: 4, title: "Arreglo de Barba", description: "Arreglo de barba con tijera y navaja", image: "beard.jpg", price: 12 },
  { id: 5, title: "Corte + Arreglo Barba", description: "Corte de pelo y arreglo de barba", image: "pack.png", price: 24 },
  { id: 6, title: "Corte + Afeitado", description: "Corte de pelo y afeitado clásico", image: "pack-2.jpg", price: 27 },
  { id: 7, title: "Corte Jubilados", description: "Corte de pelo para jubilados", image: "old-man.jpeg", price: 13 },
];

export const galleryImages = [
  "haircut-1.jpg",
  "haircut-2.jpg",
  "haircut-3.jpg",
  "haircut-4.jpg",
  "haircut-5.jpg",
  "haircut-6.jpg",
  "haircut-7.jpg",
  "haircut-8.jpg",
  "haircut-9.jpg",
];

export const testimonials: TestimonialProps[] = [
  { id: 1, punctuation: 5, name: "Juan Pérez", feedback: "Excelente servicio y ambiente agradable. Me encantó el corte de pelo que me hizo, muy bien hecho y con atención personalizada." },
  { id: 2, punctuation: 4, name: "Felipe González", feedback: "Muy buen corte de pelo, me sentí muy bien atendido y el ambiente es muy agradable. Lo recomiendo." },
  { id: 3, punctuation: 5, name: "Carlos García", feedback: "El mejor afeitado que he tenido en años. El ambiente es muy agradable y el personal muy atento y profesional. Lo recomiendo sin duda." },
];

export const infoFooter: FooterInfoSection[] = [
  {
    title: "Barbería Central",
    items: [
      { icon: "lucide:map-pin", text: "Calle Falsa 123, 28080 Madrid" },
      { icon: "lucide:phone", text: "+34 123 456 789" }
    ]
  },
  {
    title: "Horario",
    items: [
      { text: "Lun-Vie: 9:00 - 20:00" },
      { text: "Sáb: 10:00 - 18:00" },
      { text: "Dom: Cerrado" }
    ]
  },
  {
    title: "Redes Sociales",
    isSocial: true,
    items: [
      { icon: "lucide:instagram", url: "#" },
      { icon: "lucide:facebook", url: "#" }
    ]
  }
];