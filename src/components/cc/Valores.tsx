import { motion } from "framer-motion";
import Tilt3DCard from "@/components/cc/Tilt3DCard";
import { VALORES } from "@/data/cartagenaComfort";

const Valores = () => (
  <section
    id="valores"
    className="relative scroll-mt-20 py-28 text-background spotlight-wrap"
  >
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <p className="label-eyebrow text-gold">Hotel Comfort · El cambio</p>
        <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight text-balance">
          Logística, capacidad y cercanía corporativa
        </h2>
        <p className="mt-6 text-base leading-relaxed text-background/65">
          Fácil acceso a zonas industriales, empresariales, universidades y principales vías de la
          ciudad.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VALORES.map((v, i) => (
          <motion.div
            key={v.titulo}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt3DCard>
              <article className="flex h-full flex-col p-10">
                <span className="depth-1 font-serif text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="depth-2 mt-5 font-serif text-xl">{v.titulo}</h3>
                <p className="depth-1 mt-3 text-sm leading-relaxed text-background/65">{v.texto}</p>
                <div className="gold-rule depth-2 mt-7 h-px w-0 transition-all duration-700 group-hover:w-16" />
              </article>
            </Tilt3DCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Valores;

