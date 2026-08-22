import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/cc-hero.webp";
import Logo from "@/components/cc/Logo";

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
          alt="Fachada del Hotel Cartagena Comfort, balcones característicos verde y blanco"
          width={1600}
          height={1764}
          className="photo-treat h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 hero-overlay" />

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease }}
        style={{ opacity }}
        className="absolute left-6 top-7 z-20 flex items-center gap-4 md:left-10"
      >
        <Logo priority className="h-10 w-auto md:h-11" />
      </motion.div>


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
          Confort · Cercanía · Experiencias
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
