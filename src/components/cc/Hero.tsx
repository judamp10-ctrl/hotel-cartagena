import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/cc-hero.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = { onCotizar: () => void; onSwitch: () => void };

const Hero = ({ onCotizar, onSwitch }: Props) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 160]);
  const scale = useTransform(scrollY, [0, 800], [1.05, 1.18]);
  const opacity = useTransform(scrollY, [0, 480], [1, 0]);

  return (
    <section id="inicio" className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Lounge interior del Hotel Cartagena Comfort con iluminación cálida"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 hero-overlay" />

      <motion.span
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease }}
        style={{ opacity }}
        className="absolute left-6 top-8 z-20 text-[0.6rem] font-medium uppercase tracking-[0.42em] text-background/80 md:left-10"
      >
        Cartagena, Col.
      </motion.span>

      <motion.button
        onClick={onCotizar}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.3, ease }}
        style={{ opacity }}
        className="absolute right-6 top-8 z-20 text-[0.6rem] font-medium uppercase tracking-[0.42em] text-background transition-colors hover:text-gold-soft md:right-10"
      >
        Cotizar
      </motion.button>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.2, ease }}
          className="text-[0.58rem] font-medium uppercase tracking-[0.5em] text-gold-soft md:text-[0.68rem]"
        >
          Cartagena Comfort
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease }}
          className="mt-6 font-serif uppercase leading-[0.88] tracking-tighter text-background/95 text-balance text-[clamp(3rem,13vw,10.5rem)]"
        >
          <span className="block">Hotel</span>
          <span className="block">&amp; Eventos</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.8, ease }}
          className="mt-8 font-sans text-[0.95rem] font-light italic tracking-wide text-background/80 md:text-lg"
        >
          Confort · Cercanía · Experiencias
        </motion.p>

        <motion.button
          onClick={onSwitch}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease }}
          className="group mt-12 flex items-center gap-4 border border-background/30 px-8 py-4 text-[0.58rem] font-medium uppercase tracking-[0.34em] text-background backdrop-blur-md transition-colors duration-500 hover:border-gold hover:text-gold-soft md:text-[0.64rem]"
        >
          Explorar eventos corporativos
          <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
