import { useState } from "react";
import { motion } from "framer-motion";
import habitacion from "@/assets/cc-habitacion.webp";
import bodas from "@/assets/cc-bodas.webp";
import corporativos from "@/assets/cc-corporativos.webp";
import sociales from "@/assets/cc-sociales.webp";
import tematicos from "@/assets/cc-tematicos.webp";
import montaje from "@/assets/cc-montaje.webp";
import recepcion from "@/assets/cc-recepcion.webp";
import escalera from "@/assets/cc-escalera.webp";
import salaComun from "@/assets/cc-sala-comun.webp";
import habitacionDoble from "@/assets/cc-habitacion-doble.webp";
import habitacionIndividual from "@/assets/cc-habitacion-individual.webp";
import rincon from "@/assets/cc-rincon.webp";

const FILTROS = [
  "Todos",
  "Habitaciones",
  "Eventos Corporativos",
  "Bodas",
  "Quinceañeros/Sociales",
] as const;

type Filtro = (typeof FILTROS)[number];

const items: { src: string; cat: Filtro; alt: string; tall: boolean }[] = [
  { src: habitacion, cat: "Habitaciones", alt: "Habitación triple del hotel", tall: false },
  { src: bodas, cat: "Bodas", alt: "Torta de boda con rosas", tall: true },
  { src: recepcion, cat: "Habitaciones", alt: "Recepción del hotel", tall: false },
  { src: tematicos, cat: "Quinceañeros/Sociales", alt: "Evento temático Hollywood", tall: true },
  { src: corporativos, cat: "Eventos Corporativos", alt: "Salón en montaje auditorio", tall: false },
  { src: montaje, cat: "Bodas", alt: "Montaje de mesa con rosas y sillas doradas", tall: false },
  { src: sociales, cat: "Quinceañeros/Sociales", alt: "Cabina de DJ con luces y humo", tall: false },
  { src: escalera, cat: "Habitaciones", alt: "Escalera de caracol del hotel", tall: true },
  { src: salaComun, cat: "Habitaciones", alt: "Sala común del hotel", tall: false },
  { src: habitacionDoble, cat: "Habitaciones", alt: "Habitación doble del hotel", tall: true },
  { src: habitacionIndividual, cat: "Habitaciones", alt: "Habitación individual del hotel", tall: true },
  { src: rincon, cat: "Habitaciones", alt: "Rincón de descanso en el hotel", tall: false },
];

// Pendiente: la clienta debe entregar nombres y logos reales de empresas aliadas.
const aliados = ["01", "02", "03", "04", "05", "06"];

const Galeria = () => {
  const [filtro, setFiltro] = useState<Filtro>("Todos");
  const visibles = items.filter((i) => filtro === "Todos" || i.cat === filtro);


  return (
    <section id="galeria" className="scroll-mt-20 py-28 pb-40 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label-eyebrow text-gold">Galería</p>
            <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.25rem)] ">
              Lo que ya hemos hecho
            </h2>
          </motion.div>
          <div className="flex flex-wrap gap-2">
            {FILTROS.map((f) => (
              <button
                key={f}
                onClick={() => setFiltro(f)}
                className={`label-eyebrow border px-5 py-3 transition-colors duration-400 ${
                  filtro === f
                    ? "border-gold bg-gold text-accent-foreground"
                    : "border-background/25 text-background/60 hover:border-gold hover:text-gold"
                }`}

              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>figure]:mb-4">
          {visibles.map((it, i) => (
            <motion.figure
              key={it.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group break-inside-avoid overflow-hidden"
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className={`photo-treat w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105 ${
                  it.tall ? "h-[520px]" : "h-[300px]"
                }`}
              />
            </motion.figure>
          ))}
        </div>

        <div className="mt-24 border-t border-background/15 pt-14">
          <p className="label-eyebrow text-center text-background/60">
            Empresas y aliados que confían en nosotros
          </p>
          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {aliados.map((a) => (
              <span
                key={a}
                className="flex h-16 items-center justify-center border border-dashed border-background/20 text-center font-serif text-xs text-background/40 grayscale transition-all duration-500 hover:border-gold hover:text-gold hover:grayscale-0"
              >
                Logo aliado {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
