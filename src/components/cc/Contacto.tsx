import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/cc/Logo";
import { CONTACTO } from "@/data/cartagenaComfort";

const Contacto = () => (
  <footer id="contacto" className="scroll-mt-20 py-24 text-background">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="label-eyebrow text-gold">Contacto</p>
        <h2 className="mt-5 max-w-xl font-serif text-[clamp(1.9rem,3.5vw,3rem)] leading-tight text-balance">
          Dos áreas, dos canales directos
        </h2>
      </motion.div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {[
          { titulo: "Reservas de Hotel", data: CONTACTO.hotel },
          { titulo: "Reservas de Eventos", data: CONTACTO.eventos },
        ].map((b, i) => (
          <motion.div
            key={b.titulo}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-10"
          >
            <h3 className="font-serif text-2xl text-gold">{b.titulo}</h3>
            <div className="gold-rule mt-5 h-px w-12" />
            <a
              href={`https://wa.me/${b.data.wa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center gap-3 text-lg transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4 text-gold" />
              {b.data.tel}
            </a>
            <a
              href={`mailto:${b.data.email}`}
              className="mt-3 flex items-center gap-3 break-all text-sm text-background/70 transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              {b.data.email}
            </a>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-8 border-t border-background/15 pt-10 md:flex-row md:items-center md:justify-between">
        <Logo className="h-16 w-auto md:h-20" />
        <p className="flex items-start gap-3 text-sm text-background/70">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          {CONTACTO.direccion}
        </p>
        <a
          href={CONTACTO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-background/70 transition-colors hover:text-gold"
        >
          <Instagram className="h-4 w-4 text-gold" />
          {CONTACTO.instagramHandle}
        </a>
      </div>

      <div className="mb-16 mt-12 flex flex-col gap-4 border-t border-background/10 pt-8 text-xs text-background/45 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Cartagena Comfort — Hotel &amp; Eventos</span>
        <Link to="/politica-datos" className="transition-colors hover:text-gold">
          Política de Tratamiento de Datos Personales
        </Link>
      </div>
    </div>
  </footer>
);

export default Contacto;
