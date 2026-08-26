import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import habitacion from "@/assets/cc-habitacion.webp";
import bienvenida from "@/assets/cc-bienvenida.webp";
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
import literaGrupal from "@/assets/cc-litera-grupal.webp";
import desayuno from "@/assets/cc-desayuno.webp";
import lounge from "@/assets/cc-lounge.webp";
import lobbyVidrio from "@/assets/cc-lobby-vidrio.webp";
import salonCeremonia from "@/assets/cc-salon-ceremonia.webp";
import salonFilas from "@/assets/cc-salon-filas.webp";
import salonAmplio from "@/assets/cc-salon-amplio.webp";
import mesaElegante from "@/assets/cc-mesa-elegante.webp";
import logo01 from "@/assets/aliados/logo01.webp";
import logo02 from "@/assets/aliados/logo02.webp";
import logo03 from "@/assets/aliados/logo03.webp";
import logo04 from "@/assets/aliados/logo04.webp";
import logo05 from "@/assets/aliados/logo05.webp";
import logo06 from "@/assets/aliados/logo06.webp";
import logo08 from "@/assets/aliados/logo08.webp";
import logo09 from "@/assets/aliados/logo09.webp";
import logo10 from "@/assets/aliados/logo10.webp";
import logo11 from "@/assets/aliados/logo11.webp";
import logo12 from "@/assets/aliados/logo12.webp";
import logo13 from "@/assets/aliados/logo13.webp";
import logo14 from "@/assets/aliados/logo14.webp";
import logo15 from "@/assets/aliados/logo15.webp";
import logo16 from "@/assets/aliados/logo16.webp";
import logo17 from "@/assets/aliados/logo17.webp";
import logo18 from "@/assets/aliados/logo18.webp";
import logo19 from "@/assets/aliados/logo19.webp";
import logo20 from "@/assets/aliados/logo20.webp";
import logo21 from "@/assets/aliados/logo21.webp";

const FILTROS_HOTEL = ["Todos", "Habitaciones", "Áreas comunes"] as const;
const FILTROS_EVENTOS = ["Todos", "Eventos Corporativos", "Bodas", "Quinceañeros/Sociales"] as const;

type FiltroHotel = (typeof FILTROS_HOTEL)[number];
type FiltroEventos = (typeof FILTROS_EVENTOS)[number];

const itemsHotel: { src: string; cat: FiltroHotel; alt: string; tall: boolean }[] = [
  { src: habitacion, cat: "Habitaciones", alt: "Habitación triple del hotel", tall: false },
  { src: recepcion, cat: "Áreas comunes", alt: "Recepción del hotel", tall: false },
  { src: escalera, cat: "Áreas comunes", alt: "Escalera de caracol del hotel", tall: true },
  { src: salaComun, cat: "Áreas comunes", alt: "Sala común del hotel", tall: false },
  { src: habitacionDoble, cat: "Habitaciones", alt: "Habitación doble del hotel", tall: true },
  { src: habitacionIndividual, cat: "Habitaciones", alt: "Habitación individual del hotel", tall: true },
  { src: rincon, cat: "Habitaciones", alt: "Rincón de descanso en el hotel", tall: false },
  { src: literaGrupal, cat: "Habitaciones", alt: "Habitación con litera para grupos", tall: true },
  { src: bienvenida, cat: "Áreas comunes", alt: "Bienvenida en la recepción del hotel", tall: true },
  { src: desayuno, cat: "Áreas comunes", alt: "Desayuno incluido en la tarifa", tall: true },
  { src: lounge, cat: "Áreas comunes", alt: "Sala de estar del hotel", tall: false },
  { src: lobbyVidrio, cat: "Áreas comunes", alt: "Lobby con vista y balcón del hotel", tall: false },
];

const itemsEventos: { src: string; cat: FiltroEventos; alt: string; tall: boolean }[] = [
  { src: bodas, cat: "Bodas", alt: "Torta de boda con rosas", tall: true },
  { src: tematicos, cat: "Quinceañeros/Sociales", alt: "Quinceañero temático con decoración de flores y luces", tall: false },
  { src: corporativos, cat: "Eventos Corporativos", alt: "Salón en montaje auditorio", tall: false },
  { src: montaje, cat: "Bodas", alt: "Montaje de mesa con rosas y sillas doradas", tall: false },
  { src: sociales, cat: "Quinceañeros/Sociales", alt: "Cabina de DJ con luces y humo", tall: false },
  { src: salonCeremonia, cat: "Eventos Corporativos", alt: "Salón montado en teatro con cortina de fondo", tall: false },
  { src: salonFilas, cat: "Eventos Corporativos", alt: "Salón con sillas en filas para conferencia", tall: false },
  { src: salonAmplio, cat: "Eventos Corporativos", alt: "Salón amplio para eventos", tall: false },
  { src: mesaElegante, cat: "Bodas", alt: "Montaje de mesa elegante con centro de flores", tall: true },
];

const ALIADOS = [
  { src: logo01, alt: "Universidad de San Buenaventura" },
  { src: logo02, alt: "SLA COL" },
  { src: logo03, alt: "Meico S.A." },
  { src: logo04, alt: "Uimiosalud" },
  { src: logo05, alt: "Equinorte" },
  { src: logo06, alt: "Coordinadora" },
  { src: logo08, alt: "Kingspan" },
  { src: logo09, alt: "RTA Muebles" },
  { src: logo10, alt: "Delfos" },
  { src: logo11, alt: "Grupo Portafolio Verde" },
  { src: logo12, alt: "Euro Style Hair Cosmetics" },
  { src: logo13, alt: "BCD" },
  { src: logo14, alt: "Inbayan Viajes" },
  { src: logo15, alt: "Aviatur Sostenible" },
  { src: logo16, alt: "ANAVA" },
  { src: logo17, alt: "Molinos del Atlántico - La Nieve" },
  { src: logo18, alt: "Dispropan" },
  { src: logo19, alt: "Busscar" },
  { src: logo20, alt: "Consipe" },
  { src: logo21, alt: "Procimec" },
];

type Props = { view: "hotel" | "eventos" };

const Galeria = ({ view }: Props) => {
  const items = view === "hotel" ? itemsHotel : itemsEventos;
  const FILTROS = view === "hotel" ? FILTROS_HOTEL : FILTROS_EVENTOS;
  const [filtro, setFiltro] = useState<string>("Todos");

  // El filtro activo puede no existir en la otra vista (p.ej. "Bodas" no
  // aplica en Hotel) — se reinicia a "Todos" cada vez que cambia la vista.
  useEffect(() => {
    setFiltro("Todos");
  }, [view]);

  const visibles = items.filter((i) => filtro === "Todos" || i.cat === filtro);


  return (
    <section id="galeria" className="scroll-mt-20 py-28 pb-40 text-background section-fade-top">
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 border-t border-background/15 pt-14"
        >
          <p className="label-eyebrow text-center text-background/60">
            Empresas y aliados que confían en nosotros
          </p>
          <div className="marquee-viewport mt-10">
            {/* Cada logo lleva su propio mr-16 (en vez de gap en el track) para que
                "ancho + margen" sea una unidad fija idéntica en los 42 ítems. Así
                21 unidades = exactamente la mitad de 42, y translateX(-50%) cae
                justo en el borde entre las dos copias: loop sin salto visible. */}
            <div className="marquee-track">
              {[...ALIADOS, ...ALIADOS].map((aliado, i) => (
                <div
                  key={`${aliado.alt}-${i}`}
                  className={`mr-16 flex h-28 w-56 flex-shrink-0 items-center justify-center sm:h-32 sm:w-72 ${
                    i >= ALIADOS.length ? "marquee-dup" : ""
                  }`}
                >
                  <img
                    src={aliado.src}
                    alt={aliado.alt}
                    loading="eager"
                    className="marquee-logo max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Galeria;
