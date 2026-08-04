import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/assets/cc-hero.jpg";

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

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[clamp(2.2rem,6vw,4.75rem)] leading-[1.1] text-background/95 text-balance"
        >
          Confort · Cercanía · Experiencias
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="gold-rule my-8 h-px w-32 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="label-eyebrow text-gold-soft"
        >
          Cartagena Comfort — Hotel &amp; Eventos
        </motion.p>
      </motion.div>

      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-px bg-gradient-to-b from-transparent via-gold to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
