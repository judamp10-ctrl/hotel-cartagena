import { motion } from "framer-motion";
import { Check } from "lucide-react";
import habitacion from "@/assets/cc-habitacion.jpg";
import Tilt3DCard from "@/components/cc/Tilt3DCard";
import {
  BENEFICIOS_CORPORATIVOS,
  HABITACIONES,
  HABITACION_INCLUYE,
  HOTEL_CAPACIDAD,
  WA_HOTEL,
} from "@/data/cartagenaComfort";


const Hotel = () => (
  <section
    id="hotel-comfort"
    className="relative scroll-mt-20 py-28 text-background spotlight-wrap"
  >
    <span id="habitaciones" className="absolute -top-20" aria-hidden />
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid items-end gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label-eyebrow text-gold">Hotel Comfort · {HOTEL_CAPACIDAD}</p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight text-balance">
            Habitaciones pensadas para trabajar y descansar
          </h2>

        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm leading-relaxed text-background/70"
        >
          Todas nuestras acomodaciones incluyen los mismos servicios: colchón semi ortopédico, aire
          acondicionado, baño privado, televisión, Wi-Fi de alta velocidad y desayuno buffet.
        </motion.p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {HABITACIONES.map((h, i) => (
          <motion.div
            key={h.nombre}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt3DCard variant={h.destacada ? "gold" : "glass"}>
              <article className="flex h-full flex-col p-10">
                {h.destacada && (
                  <span className="label-eyebrow depth-2 mb-4 block text-gold">Más solicitada</span>
                )}
                <h3 className="depth-2 font-serif text-2xl">{h.nombre}</h3>
                <p className="depth-1 mt-2 text-xs uppercase tracking-widest text-background/50">
                  {h.pax}
                </p>
                <p className="depth-3 mt-8 font-serif text-4xl text-gold">{h.precio}</p>
                <p className="depth-1 mt-1 text-xs text-background/50">por noche · antes de IVA</p>
                <ul className="depth-1 mt-8 space-y-3 border-t border-background/15 pt-8">
                  {HABITACION_INCLUYE.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-background/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Tilt3DCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFICIOS_CORPORATIVOS.map((b) => (
          <div key={b} className="glass-card p-6 text-sm leading-relaxed text-background/75">
            <Check className="mb-3 h-4 w-4 text-gold" />
            {b}
          </div>
        ))}
      </div>


      <div className="mt-14 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-xl text-xs leading-relaxed text-background/45">
          Tarifas antes de IVA. Sujetas a disponibilidad y temporada. Aplican condiciones para
          grupos y convenios.
        </p>
        <a
          href={`https://wa.me/${WA_HOTEL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="label-eyebrow inline-block bg-gold px-10 py-5 text-accent-foreground transition-all duration-500 hover:bg-gold-soft"
        >
          Consultar disponibilidad
        </a>
      </div>

      <motion.figure
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-20 overflow-hidden"
      >
        <img
          src={habitacion}
          alt="Habitación del Hotel Cartagena Comfort con escritorio de trabajo"
          loading="lazy"
          width={1280}
          height={1024}
          className="h-[420px] w-full object-cover transition-transform duration-[1.6s] hover:scale-105"
        />
      </motion.figure>
    </div>
  </section>
);

export default Hotel;
