import { motion } from "framer-motion";
import { Check } from "lucide-react";
import lounge from "@/assets/cc-lounge.webp";
import habitacion from "@/assets/cc-habitacion.webp";
import tarifaSencilla from "@/assets/cc-tarifa-sencilla.webp";
import tarifaDoble from "@/assets/cc-tarifa-doble.webp";
import ServiciosComplementarios from "@/components/cc/ServiciosComplementarios";
import Tilt3DCard from "@/components/cc/Tilt3DCard";
import {
  BENEFICIOS_CORPORATIVOS,
  HABITACIONES,
  HABITACION_INCLUYE,
  HOTEL_CAPACIDAD,
  WA_HOTEL,
} from "@/data/cartagenaComfort";

const ease = [0.22, 1, 0.36, 1] as const;

const FOTO_POR_HABITACION: Record<string, string> = {
  Sencilla: tarifaSencilla,
  Doble: tarifaDoble,
  Triple: habitacion,
};


const Hotel = () => (
  <section
    id="hotel-comfort"
    className="relative scroll-mt-20 py-28 text-background spotlight-wrap section-fade-top"
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
          acondicionado, baño privado, televisión, Wi-Fi de alta velocidad y desayuno incluido en
          la tarifa.
        </motion.p>
      </div>

      <motion.figure
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-14 overflow-hidden"
      >
        <img
          src={lounge}
          alt="Sala de estar del Hotel Cartagena Comfort"
          loading="lazy"
          width={1600}
          height={1067}
          className="photo-treat h-[360px] w-full object-cover transition-transform duration-[1.6s] hover:scale-105 md:h-[460px]"
        />
      </motion.figure>

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
              <article className="flex h-full flex-col">
                <div className="depth-1 relative overflow-hidden">
                  <img
                    src={FOTO_POR_HABITACION[h.nombre]}
                    alt={`Habitación ${h.nombre.toLowerCase()} del Hotel Cartagena Comfort`}
                    loading="lazy"
                    width={900}
                    height={640}
                    className="h-48 w-full object-cover"
                  />
                  {h.destacada && (
                    <span className="label-eyebrow absolute right-4 top-4 bg-gold px-3 py-1.5 text-accent-foreground">
                      Más solicitada
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-10">
                  <h3 className="depth-2 font-serif text-2xl">{h.nombre}</h3>
                  <p className="depth-1 mt-2 text-xs uppercase tracking-widest text-background/50">
                    {h.pax}
                  </p>
                  <p className="depth-3 mt-8 font-serif text-4xl text-gold">{h.precio}</p>
                  <p className="depth-1 mt-1 text-xs text-background/50">por noche · antes de IVA</p>
                  <ul className="depth-1 mt-8 space-y-3 border-t border-background/15 pt-8">
                    {HABITACION_INCLUYE.map((s, j) => (
                      <motion.li
                        key={s}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: Math.min(j * 0.05, 0.4), ease }}
                        className="flex items-start gap-3 text-sm text-background/75"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {s}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </article>
            </Tilt3DCard>
          </motion.div>
        ))}
      </div>

      <motion.a
        href={`https://wa.me/${WA_HOTEL}?text=${encodeURIComponent(
          "Hola, quiero saber las tarifas promocionales de fin de semana"
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="group tilt-card tilt-card-gold mt-14 flex flex-col items-start gap-4 overflow-hidden p-8 transition-transform duration-300 [@media(hover:hover)]:hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h3 className="font-serif text-xl text-background">Tarifa promocional de fin de semana</h3>
          <p className="mt-1 text-xs text-background/60">
            Viernes a domingo · incluye desayuno · pregúntanos por WhatsApp
          </p>
        </div>
        <span className="label-eyebrow shrink-0 border border-gold/60 px-8 py-4 text-background transition-colors duration-500 group-hover:bg-gold">
          Pregunta por nuestras tarifas →
        </span>
      </motion.a>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFICIOS_CORPORATIVOS.map((b, i) => (
          <motion.div
            key={b}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: Math.min(i * 0.06, 0.4), ease }}
            className="glass-card p-6 text-sm leading-relaxed text-background/75 transition-transform duration-300 [@media(hover:hover)]:hover:-translate-y-1"
          >
            <Check className="mb-3 h-4 w-4 text-gold" />
            {b}
          </motion.div>
        ))}
      </div>

      <ServiciosComplementarios />


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
    </div>
  </section>
);

export default Hotel;
