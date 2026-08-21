import { motion } from "framer-motion";
import equipo from "@/assets/cc-equipo.jpg";
import { NOSOTROS } from "@/data/cartagenaComfort";

const Nosotros = () => (
  <section id="nosotros" className="relative scroll-mt-20 py-28 text-background section-fade-top">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label-eyebrow text-gold">Nosotros</p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight text-balance">
            Más que un hotel, un espacio para conectar, descansar y celebrar
          </h2>
          <div className="mt-8 space-y-5">
            {NOSOTROS.texto.map((p) => (
              <p key={p} className="text-sm leading-relaxed text-background/70">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <img
            src={equipo}
            alt="Equipo del Hotel Cartagena Comfort en recepción"
            loading="lazy"
            width={900}
            height={1200}
            className="photo-treat h-[480px] w-full object-cover object-top transition-transform duration-[1.6s] hover:scale-105 lg:h-[560px]"
          />
        </motion.figure>
      </div>
    </div>
  </section>
);

export default Nosotros;
