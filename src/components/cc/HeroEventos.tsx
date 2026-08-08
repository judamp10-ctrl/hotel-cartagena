import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import heroImg from "@/assets/cc-hero-eventos.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = { onCotizar: () => void; onSwitch: () => void };

const HeroEventos = ({ onCotizar, onSwitch }: Props) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 160]);
  const scale = useTransform(scrollY, [0, 800], [1.05, 1.18]);
  const opacity = useTransform(scrollY, [0, 480], [1, 0]);

  return (
    <section
      id="inicio"
      className="relative h-[100svh] w-full overflow-hidden bg-[hsl(224_40%_4%)]"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Salón corporativo del centro de eventos Cartagena Comfort"
          width={1920}
          height={1280}
          className="photo-treat h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224_45%_5%_/_0.8)] via-[hsl(222_45%_6%_/_0.55)] to-[hsl(224_45%_4%_/_0.92)]" />

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.1, ease }}
        style={{ opacity }}
        className="absolute left-6 top-7 z-20 flex items-center gap-4 md:left-10"
      >
        <Logo priority className="h-10 w-auto md:h-11" />
        <span className="hidden text-[0.6rem] font-medium uppercase tracking-[0.42em] text-background/70 sm:inline">
          Ala corporativa
        </span>
      </motion.div>


      <motion.button
        onClick={onCotizar}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease }}
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
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="text-[0.58rem] font-medium uppercase tracking-[0.5em] text-gold-soft md:text-[0.68rem]"
        >
          Cartagena Comfort · Centro de eventos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease }}
          className="mt-6 font-serif uppercase leading-[0.88] tracking-tighter text-background/95 text-balance text-[clamp(2.6rem,11vw,9rem)]"
        >
          <span className="block">Salones</span>
          <span className="block">&amp; Convenciones</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.8, ease }}
          className="mt-8 font-sans text-[0.95rem] font-light italic tracking-wide text-background/75 md:text-lg"
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
