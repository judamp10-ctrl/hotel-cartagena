import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import heroGala from "@/assets/cc-hero-eventos.webp";
import bodas from "@/assets/cc-bodas.webp";
import tematicos from "@/assets/cc-tematicos.webp";
import mesaElegante from "@/assets/cc-mesa-elegante.webp";

const ease = [0.22, 1, 0.36, 1] as const;

// Las 4 comparten paleta cálida (dorado/blush) a propósito — se descartó
// cc-corporativos.webp (auditorio con luz azul) para no saltar de frío a
// cálido entre diapositivas.
const SLIDES = [
  { src: heroGala, alt: "Salón corporativo del centro de eventos Cartagena Comfort" },
  { src: bodas, alt: "Torta de boda con rosas en Cartagena Comfort" },
  { src: tematicos, alt: "Quinceañero temático con decoración de flores y luces" },
  { src: mesaElegante, alt: "Montaje de mesa elegante con centro de flores" },
];

const SLIDE_DURATION = 6000;

type Props = { onSwitch: () => void };

const HeroEventos = ({ onSwitch }: Props) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 160]);
  const scale = useTransform(scrollY, [0, 800], [1.05, 1.18]);
  const opacity = useTransform(scrollY, [0, 480], [1, 0]);

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="inicio"
      className="relative h-[100svh] w-full overflow-hidden bg-[hsl(224_40%_4%)]"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className={`photo-treat absolute inset-0 h-full w-full object-cover transition-opacity duration-[1.6s] ease-in-out ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224_45%_5%_/_0.8)] via-[hsl(222_45%_6%_/_0.55)] to-[hsl(224_45%_4%_/_0.92)]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="text-[0.58rem] font-medium uppercase tracking-[0.5em] text-gold-soft md:text-[0.68rem]"
        >
          Cartagena Comfort · Centro de eventos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease }}
          className="mt-6 whitespace-nowrap font-serif text-[clamp(1.5rem,7.4vw,4.6rem)] italic leading-tight text-background/95"
        >
          Salones &amp; Convenciones
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.85, ease }}
          className="mt-4 text-[0.68rem] font-medium uppercase tracking-[0.38em] text-background/70 md:text-[0.78rem]"
        >
          Logística · Capacidad · Precisión
        </motion.p>

        <motion.button
          onClick={onSwitch}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease }}
          className="group mt-12 flex items-center gap-4 border border-background/30 px-8 py-4 text-[0.58rem] font-medium uppercase tracking-[0.34em] text-background backdrop-blur-md transition-colors duration-500 hover:border-gold hover:text-gold-soft md:text-[0.64rem]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-2" />
          Volver a Hotel Comfort
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroEventos;
