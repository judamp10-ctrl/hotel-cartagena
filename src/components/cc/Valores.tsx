import { motion } from "framer-motion";
import { VALORES } from "@/data/cartagenaComfort";

const Valores = () => (
  <section id="valores" className="relative scroll-mt-20 py-28 text-background">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <p className="label-eyebrow text-gold">El cambio</p>
        <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight text-balance">
          Logística, capacidad y cercanía corporativa
        </h2>
        <p className="mt-6 text-base leading-relaxed text-background/65">
          Fácil acceso a zonas industriales, empresariales, universidades y principales vías de la
          ciudad.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {VALORES.map((v, i) => (
          <motion.article
            key={v.titulo}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card group p-10 transition-all duration-500 hover:-translate-y-1"
          >
            <span className="font-serif text-sm text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 font-serif text-xl">{v.titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-background/65">{v.texto}</p>
            <div className="gold-rule mt-7 h-px w-0 transition-all duration-700 group-hover:w-16" />
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Valores;
