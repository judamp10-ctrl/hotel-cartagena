import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bodas from "@/assets/cc-bodas.jpg";
import corporativos from "@/assets/cc-corporativos.jpg";
import sociales from "@/assets/cc-sociales.jpg";
import tematicos from "@/assets/cc-tematicos.jpg";
import Tilt3DCard from "@/components/cc/Tilt3DCard";
import { CATEGORIAS_EVENTO, EVENTOS_TOTAL, PAQUETES, SALONES, SALON_BASE, SERVICIOS_EXTRA } from "@/data/cartagenaComfort";

const imgs = [corporativos, bodas, sociales, tematicos];
const tipos = CATEGORIAS_EVENTO.map((c, i) => ({ ...c, img: imgs[i] }));


const scrollToForm = (paquete?: string) => {
  if (paquete) {
    window.dispatchEvent(new CustomEvent("cc:preselect-paquete", { detail: paquete }));
  }
  document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" });
};

const Eventos = () => (
  <section id="eventos-comfort" className="relative scroll-mt-20 py-28 text-background spotlight-wrap">
    <span id="salones" className="absolute -top-20" aria-hidden />
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <p className="label-eyebrow text-gold">Eventos Comfort · El lugar</p>
        <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight text-background text-balance">
          Cinco salones, una sola coordinación
        </h2>
        <p className="mt-4 text-sm text-background/70">{EVENTOS_TOTAL}</p>

      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tipos.map((t, i) => (
          <motion.div
            key={t.nombre}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt3DCard intensity={7}>
              <figure className="relative h-[340px] overflow-hidden">
                <img
                  src={t.img}
                  alt={`Eventos ${t.nombre.toLowerCase()} en Cartagena Comfort`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <figcaption className="depth-2 absolute bottom-0 left-0 p-6">
                  <span className="font-serif text-2xl text-background">{t.nombre}</span>
                  <div className="gold-rule mt-3 h-px w-0 transition-all duration-700 group-hover:w-14" />
                </figcaption>
              </figure>
            </Tilt3DCard>
          </motion.div>
        ))}
      </div>


      {/* Salones */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-24"
      >
        <h3 className="font-serif text-2xl text-background">Salones y capacidades</h3>
        <div className="tilt-card mt-8 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-background/15 bg-background/[0.07]">
                {["Salón", "Auditorio", "Aula", "Tipo U", "Valor / hora", "Distintivo"].map((h) => (
                  <th key={h} className="label-eyebrow px-6 py-4 text-background/60">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SALONES.map((s) => (
                <tr
                  key={s.nombre}
                  className="border-b border-background/15 transition-colors last:border-0 hover:bg-background/[0.05]"
                >
                  <td className="px-6 py-5 font-serif text-lg text-background">{s.nombre}</td>
                  <td className="px-6 py-5">{s.auditorio}</td>
                  <td className="px-6 py-5">{s.aula}</td>
                  <td className="px-6 py-5">{s.tipoU}</td>
                  <td className="px-6 py-5 font-medium text-gold">{s.valor}</td>
                  <td className="px-6 py-5 text-xs text-background/60">{s.distintivo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {SALON_BASE.map((b) => (
            <span key={b} className="flex items-center gap-2 text-xs text-background/60">
              <Check className="h-3.5 w-3.5 text-gold" />
              {b}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-background/60">
          Las tarifas corresponden al valor base por hora. Los espacios pueden contratarse por el
          tiempo requerido y están sujetos a descuentos según la cantidad de horas reservadas.
        </p>
      </motion.div>

      {/* Paquetes */}
      <div className="mt-24">
        <h3 className="font-serif text-2xl text-background">Paquetes de evento</h3>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {PAQUETES.map((p, i) => (
            <motion.div
              key={p.nombre}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Tilt3DCard variant={i === 2 ? "gold" : "glass"}>
                <article className="flex h-full flex-col p-10">
                  <h4 className="depth-2 font-serif text-2xl text-background">{p.nombre}</h4>
                  <div className="gold-rule depth-2 mt-5 h-px w-12" />
                  <ul className="depth-1 mt-7 flex-1 space-y-3">
                    {p.incluye.map((x) => (
                      <li key={x} className="flex items-start gap-3 text-sm text-background/60">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollToForm(p.nombre)}
                    className="label-eyebrow depth-3 mt-10 border border-gold/60 px-8 py-4 text-background transition-colors duration-500 hover:bg-gold hover:text-accent-foreground"
                  >
                    Cotizar {p.nombre}
                  </button>
                </article>
              </Tilt3DCard>
            </motion.div>
          ))}

        </div>
      </div>

      {/* Servicios extra */}
      <div className="mt-24 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h3 className="font-serif text-2xl text-background">Servicios adicionales</h3>
          <p className="mt-4 text-sm leading-relaxed text-background/60">
            Catering, bar, animación, decoración y producción se contratan como complemento de
            cualquier salón o paquete.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {SERVICIOS_EXTRA.map((s) => (
            <AccordionItem key={s.titulo} value={s.titulo} className="border-background/15">
              <AccordionTrigger className="font-serif text-lg text-background hover:no-underline">
                {s.titulo}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-background/60">
                {s.texto}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default Eventos;
