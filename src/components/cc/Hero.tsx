import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/cc-hero.webp";
import lobbyVidrio from "@/assets/cc-lobby-vidrio.webp";
import lounge from "@/assets/cc-lounge.webp";
import habitacionDoble from "@/assets/cc-habitacion-doble.webp";

const ease = [0.22, 1, 0.36, 1] as const;

// La fachada va primera: es la identificación del lugar. El recorte excluye
// los cables de luz que cruzaban el cielo y el poste junto al árbol (recorte
// en vez de retoque, para no publicar un parche visible).
const SLIDES = [
  { src: heroImg, alt: "Fachada del Hotel Cartagena Comfort, balcones característicos verde y blanco" },
  { src: lobbyVidrio, alt: "Lobby luminoso del Hotel Cartagena Comfort" },
  { src: lounge, alt: "Sala de estar del Hotel Cartagena Comfort" },
  { src: habitacionDoble, alt: "Habitación doble del Hotel Cartagena Comfort" },
];

const SLIDE_DURATION = 6000;

type Props = { onSwitch: () => void };

const Hero = ({ onSwitch }: Props) => {
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
    <section id="inicio" className="relative h-[100svh] w-full overflow-hidden bg-ink">
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
      <div className="absolute inset-0 hero-overlay" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease }}
          className="text-[0.64rem] font-medium uppercase tracking-[0.5em] text-gold-soft md:text-[0.8rem]"
        >
          Hotel &amp; Eventos
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease }}
          className="mt-6 whitespace-nowrap font-serif text-[clamp(1.5rem,7.4vw,4.6rem)] italic leading-tight text-background/95"
        >
          Hotel Cartagena Comfort
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.85, ease }}
          className="mt-4 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-background/70 md:text-[0.8rem]"
        >
          Comfort · Cercanía · Experiencias
        </motion.p>


        <motion.button
          onClick={onSwitch}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease }}
          className="group mt-10 flex items-center gap-4 border border-background/30 px-8 py-4 text-[0.58rem] font-medium uppercase tracking-[0.34em] text-background backdrop-blur-md transition-colors duration-500 hover:border-gold hover:text-gold-soft md:text-[0.64rem]"
        >
          Explorar Eventos Comfort
          <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
