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
import { PAQUETES, SALONES, SALON_BASE, SERVICIOS_EXTRA } from "@/data/cartagenaComfort";

const tipos = [
  { nombre: "Bodas", img: bodas },
  { nombre: "Corporativos", img: corporativos },
  { nombre: "Sociales", img: sociales },
  { nombre: "Temáticos", img: tematicos },
];

const scrollToForm = (paquete?: string) => {
  if (paquete) {
    window.dispatchEvent(new CustomEvent("cc:preselect-paquete", { detail: paquete }));
  }
  document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" });
};

const Eventos = () => (
  <section id="eventos" className="scroll-mt-20 bg-background py-28">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <p className="label-eyebrow text-gold">El lugar · Eventos</p>
        <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight text-primary text-balance">
          Cuatro salones, una sola coordinación
        </h2>
      </motion.div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tipos.map((t, i) => (
          <motion.figure
            key={t.nombre}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative h-[340px] overflow-hidden"
          >
            <img
              src={t.img}
              alt={`Eventos ${t.nombre.toLowerCase()} en Cartagena Comfort`}
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 p-6">
              <span className="font-serif text-2xl text-background">{t.nombre}</span>
              <div className="gold-rule mt-3 h-px w-0 transition-all duration-700 group-hover:w-14" />
            </figcaption>
          </motion.figure>
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
        <h3 className="font-serif text-2xl text-primary">Salones y capacidades</h3>
        <div className="mt-8 overflow-x-auto border border-border bg-card">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/60">
                {["Salón", "Auditorio", "Aula", "Tipo U", "Valor / hora", "Distintivo"].map((h) => (
                  <th key={h} className="label-eyebrow px-6 py-4 text-muted-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SALONES.map((s) => (
                <tr
                  key={s.nombre}
                  className="border-b border-border transition-colors last:border-0 hover:bg-secondary/40"
                >
                  <td className="px-6 py-5 font-serif text-lg text-primary">{s.nombre}</td>
                  <td className="px-6 py-5">{s.auditorio}</td>
                  <td className="px-6 py-5">{s.aula}</td>
                  <td className="px-6 py-5">{s.tipoU}</td>
                  <td className="px-6 py-5 font-medium text-gold">{s.valor}</td>
                  <td className="px-6 py-5 text-xs text-muted-foreground">{s.distintivo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {SALON_BASE.map((b) => (
            <span key={b} className="flex items-center gap-2 text-xs text-muted-foreground">
              <Check className="h-3.5 w-3.5 text-gold" />
              {b}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          Las tarifas corresponden al valor base por hora. Los espacios pueden contratarse por el
          tiempo requerido y están sujetos a descuentos según la cantidad de horas reservadas.
        </p>
      </motion.div>

      {/* Paquetes */}
      <div className="mt-24">
        <h3 className="font-serif text-2xl text-primary">Paquetes de evento</h3>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {PAQUETES.map((p, i) => (
            <motion.article
              key={p.nombre}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col border border-border bg-card p-10 transition-shadow duration-500 hover:shadow-[var(--shadow-lift)]"
            >
              <h4 className="font-serif text-2xl text-primary">{p.nombre}</h4>
              <div className="gold-rule mt-5 h-px w-12" />
              <ul className="mt-7 flex-1 space-y-3">
                {p.incluye.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {x}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollToForm(p.nombre)}
                className="label-eyebrow mt-10 border border-primary px-8 py-4 text-primary transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
              >
                Cotizar {p.nombre}
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Servicios extra */}
      <div className="mt-24 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h3 className="font-serif text-2xl text-primary">Servicios adicionales</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Catering, bar, animación, decoración y producción se contratan como complemento de
            cualquier salón o paquete.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {SERVICIOS_EXTRA.map((s) => (
            <AccordionItem key={s.titulo} value={s.titulo} className="border-border">
              <AccordionTrigger className="font-serif text-lg text-primary hover:no-underline">
                {s.titulo}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
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
