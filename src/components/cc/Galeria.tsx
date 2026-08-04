import { useState } from "react";
import { motion } from "framer-motion";
import habitacion from "@/assets/cc-habitacion.jpg";
import lobby from "@/assets/cc-hero.jpg";
import bodas from "@/assets/cc-bodas.jpg";
import corporativos from "@/assets/cc-corporativos.jpg";
import sociales from "@/assets/cc-sociales.jpg";
import tematicos from "@/assets/cc-tematicos.jpg";
import montaje from "@/assets/cc-montaje.jpg";

const items = [
  { src: habitacion, cat: "Habitaciones", alt: "Habitación con escritorio de trabajo", tall: false },
  { src: bodas, cat: "Eventos", alt: "Montaje de boda en salón", tall: true },
  { src: lobby, cat: "Habitaciones", alt: "Lounge del hotel", tall: false },
  { src: tematicos, cat: "Eventos", alt: "Evento temático decorado", tall: true },
  { src: corporativos, cat: "Eventos", alt: "Salón en montaje auditorio", tall: false },
  { src: montaje, cat: "Eventos", alt: "Montaje de mesa con menaje dorado", tall: false },
  { src: sociales, cat: "Eventos", alt: "Pista de baile con efectos", tall: false },
];

// Pendiente: la clienta debe entregar nombres y logos reales de empresas aliadas.
const aliados = ["01", "02", "03", "04", "05", "06"];

const Galeria = () => {
  const [filtro, setFiltro] = useState<"Todos" | "Habitaciones" | "Eventos">("Todos");
  const visibles = items.filter((i) => filtro === "Todos" || i.cat === filtro);

  return (
    <section id="galeria" className="scroll-mt-20 bg-secondary/50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label-eyebrow text-gold">Galería</p>
            <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.25rem)] text-primary">
              Lo que ya hemos hecho
            </h2>
          </motion.div>
          <div className="flex gap-2">
            {(["Todos", "Habitaciones", "Eventos"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFiltro(f)}
                className={`label-eyebrow border px-5 py-3 transition-colors duration-400 ${
                  filtro === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-gold hover:text-gold"
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
                className={`w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105 ${
                  it.tall ? "h-[520px]" : "h-[300px]"
                }`}
              />
            </motion.figure>
          ))}
        </div>

        <div className="mt-24 border-t border-border pt-14">
          <p className="label-eyebrow text-center text-muted-foreground">
            Empresas y aliados que confían en nosotros
          </p>
          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {aliados.map((a) => (
              <span
                key={a}
                className="flex h-16 items-center justify-center border border-dashed border-border text-center font-serif text-xs text-muted-foreground/50 grayscale transition-all duration-500 hover:border-gold hover:text-gold hover:grayscale-0"
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
