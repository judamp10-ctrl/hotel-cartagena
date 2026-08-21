import { motion } from "framer-motion";
import { ArrowUpDown, Car, Droplets, Wifi, Utensils, Zap } from "lucide-react";
import { SERVICIOS_COMPLEMENTARIOS } from "@/data/cartagenaComfort";

const ICONOS = [Utensils, Wifi, ArrowUpDown, Zap, Droplets, Car];

const ServiciosComplementarios = () => (
  <div className="mt-20">
    <p className="label-eyebrow text-gold">Servicios complementarios</p>
    <h3 className="mt-4 font-serif text-2xl text-background">
      Comodidad, respaldo y soluciones pensadas para tu tranquilidad
    </h3>
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICIOS_COMPLEMENTARIOS.map((s, i) => {
        const Icono = ICONOS[i];
        return (
          <motion.div
            key={s.titulo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: Math.min(i * 0.06, 0.4), ease: [0.22, 1, 0.36, 1] }}
            className="glass-card flex gap-4 p-6 transition-transform duration-300 [@media(hover:hover)]:hover:-translate-y-1"
          >
            <Icono className="h-5 w-5 shrink-0 text-gold" />
            <div>
              <h4 className="font-serif text-base text-background">{s.titulo}</h4>
              <p className="mt-1 text-xs leading-relaxed text-background/60">{s.texto}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default ServiciosComplementarios;
