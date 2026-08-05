import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/assets/cc-hero.jpg";

const navLinks = [
  { label: "Hotel", href: "#hotel" },
  { label: "Eventos", href: "#eventos" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 160]);
  const scale = useTransform(scrollY, [0, 800], [1.05, 1.18]);
  const opacity = useTransform(scrollY, [0, 480], [1, 0]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-ink">
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

      {/* Esquina superior izquierda */}
      <motion.span
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.4, ease }}
        style={{ opacity }}
        className="absolute left-6 top-8 z-20 text-[0.6rem] font-medium uppercase tracking-[0.42em] text-background/80 md:left-10"
      >
        Cartagena, Col.
      </motion.span>

      {/* Esquina superior derecha */}
      <motion.a
        href="#cotizar"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5, ease }}
        style={{ opacity }}
        className="absolute right-6 top-8 z-20 text-[0.6rem] font-medium uppercase tracking-[0.42em] text-background transition-colors hover:text-gold-soft md:right-10"
      >
        Cotizar
      </motion.a>

      {/* Centro monumental */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.3, ease }}
          className="text-[0.58rem] font-medium uppercase tracking-[0.5em] text-gold-soft md:text-[0.68rem]"
        >
          Cartagena Comfort
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.55, ease }}
          className="mt-6 font-serif uppercase leading-[0.88] tracking-tighter text-background/95 text-balance text-[clamp(3rem,13vw,10.5rem)]"
        >
          <span className="block">Hotel</span>
          <span className="block">&amp; Eventos</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.05, ease }}
          className="mt-8 font-sans text-[0.95rem] font-light italic tracking-wide text-background/80 md:text-lg"
        >
          Confort · Cercanía · Experiencias
        </motion.p>
      </motion.div>

      {/* Barra inferior transparente */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.7, ease }}
        style={{ opacity }}
        className="absolute inset-x-0 bottom-0 z-20 w-full backdrop-blur-[2px]"
      >
        <ul className="flex items-center justify-center gap-8 py-6 md:gap-16">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.6rem] font-medium uppercase tracking-[0.34em] text-background/85 transition-colors hover:text-gold-soft md:text-[0.68rem]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </section>
  );
};

export default Hero;
