import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { SALONES, PAQUETES, TIPOS_EVENTO, WA_EVENTOS } from "@/data/cartagenaComfort";

const inputClass =
  "w-full border-b border-background/25 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

const Cotizar = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    tipo: "",
    fecha: "",
    horaInicio: "",
    horaFin: "",
    asistentes: "",
    salon: "",
    paquete: "",
    tipoId: "",
    numeroId: "",
    autoriza: false,
  });
  const [facturacion, setFacturacion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setForm((f) => ({ ...f, paquete: detail }));
    };
    window.addEventListener("cc:preselect-paquete", handler);
    return () => window.removeEventListener("cc:preselect-paquete", handler);
  }, []);

  const set = (k: keyof typeof form, v: string | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.autoriza) {
      toast.error("Debes autorizar el tratamiento de tus datos.");
      return;
    }
    const url =
      `https://wa.me/${WA_EVENTOS}?text=` +
      "Hola,%20quiero%20cotizar%20un%20evento%20en%20Cartagena%20Comfort.%0A%0A" +
      `Nombre:%20${encodeURIComponent(form.nombre)}%0A` +
      `WhatsApp:%20${encodeURIComponent(form.telefono)}%0A` +
      `Tipo%20de%20evento:%20${encodeURIComponent(form.tipo)}%0A` +
      `Fecha%20tentativa:%20${encodeURIComponent(form.fecha)}%0A` +
      `Horario:%20${encodeURIComponent(form.horaInicio)}%20a%20${encodeURIComponent(form.horaFin)}%0A` +
      `Asistentes:%20${encodeURIComponent(form.asistentes)}%0A` +
      `Sal%C3%B3n%20de%20inter%C3%A9s:%20${encodeURIComponent(form.salon || "No sé aún")}%0A` +
      `Paquete%20de%20inter%C3%A9s:%20${encodeURIComponent(form.paquete || "No sé aún")}` +
      (form.numeroId
        ? `%0ATipo%20de%20ID:%20${encodeURIComponent(form.tipoId)}%0AN%C3%BAmero%20de%20ID:%20${encodeURIComponent(form.numeroId)}`
        : "");
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Abriendo WhatsApp con tu solicitud…");
  };

  return (
    <section id="cotizar" ref={ref} className="scroll-mt-20 py-28 text-background section-fade-top">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="label-eyebrow text-gold">Cotización</p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight text-balance">
            Cuéntanos tu evento y lo cotizamos hoy
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm text-background/65">
            Al enviar, se abre WhatsApp con tu solicitud ya redactada hacia el área de eventos.
          </p>
        </motion.div>

        <form
          onSubmit={onSubmit}
          className="mt-14 grid gap-x-10 gap-y-8 text-background sm:grid-cols-2 [&_input]:text-background [&_select]:text-background"
        >
          <label className="block">
            <span className="label-eyebrow text-background/55">Nombre completo *</span>
            <input
              required
              value={form.nombre}
              onChange={(e) => set("nombre", e.target.value)}
              className={inputClass}
              placeholder="Tu nombre"
            />
          </label>

          <label className="block">
            <span className="label-eyebrow text-background/55">WhatsApp *</span>
            <input
              required
              type="tel"
              value={form.telefono}
              onChange={(e) => set("telefono", e.target.value)}
              className={inputClass}
              placeholder="300 000 0000"
            />
          </label>

          <label className="block">
            <span className="label-eyebrow text-background/55">Tipo de evento *</span>
            <select
              required
              value={form.tipo}
              onChange={(e) => set("tipo", e.target.value)}
              className={`${inputClass} [&>option]:text-foreground`}
            >
              <option value="">Selecciona…</option>
              {TIPOS_EVENTO.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="label-eyebrow text-background/55">Fecha tentativa *</span>
            <input
              required
              type="date"
              value={form.fecha}
              onChange={(e) => set("fecha", e.target.value)}
              className={inputClass}
            />
          </label>

          <label className="block">
            <span className="label-eyebrow text-background/55">Horario *</span>
            <div className="flex gap-4">
              <input
                required
                type="time"
                value={form.horaInicio}
                onChange={(e) => set("horaInicio", e.target.value)}
                className={inputClass}
              />
              <input
                required
                type="time"
                value={form.horaFin}
                onChange={(e) => set("horaFin", e.target.value)}
                className={inputClass}
              />
            </div>
          </label>

          <label className="block">
            <span className="label-eyebrow text-background/55">Número de asistentes *</span>
            <input
              required
              type="number"
              min={1}
              value={form.asistentes}
              onChange={(e) => set("asistentes", e.target.value)}
              className={inputClass}
              placeholder="120"
            />
          </label>

          <label className="block">
            <span className="label-eyebrow text-background/55">Salón de interés</span>
            <select
              value={form.salon}
              onChange={(e) => set("salon", e.target.value)}
              className={`${inputClass} [&>option]:text-foreground`}
            >
              <option value="">No sé aún</option>
              {SALONES.map((s) => (
                <option key={s.nombre} value={s.nombre}>
                  {s.nombre}
                </option>
              ))}
            </select>
          </label>

          <label className="block sm:col-span-2">
            <span className="label-eyebrow text-background/55">Paquete de interés</span>
            <select
              value={form.paquete}
              onChange={(e) => set("paquete", e.target.value)}
              className={`${inputClass} [&>option]:text-foreground`}
            >
              <option value="">No sé aún</option>
              {PAQUETES.map((p) => (
                <option key={p.nombre} value={p.nombre}>
                  {p.nombre}
                </option>
              ))}
            </select>
          </label>

          <div className="sm:col-span-2">
            <button
              type="button"
              onClick={() => setFacturacion((v) => !v)}
              className="label-eyebrow text-gold"
            >
              {facturacion ? "− " : "+ "} Datos para facturación (opcional)
            </button>
            {facturacion && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-6 grid gap-x-10 gap-y-8 overflow-hidden sm:grid-cols-2"
              >
                <label className="block">
                  <span className="label-eyebrow text-background/55">Tipo de identificación</span>
                  <select
                    value={form.tipoId}
                    onChange={(e) => set("tipoId", e.target.value)}
                    className={`${inputClass} [&>option]:text-foreground`}
                  >
                    <option value="">Selecciona…</option>
                    {["CC", "CE", "NIT", "Pasaporte"].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="label-eyebrow text-background/55">Número de identificación</span>
                  <input
                    value={form.numeroId}
                    onChange={(e) => set("numeroId", e.target.value)}
                    className={inputClass}
                  />
                </label>
              </motion.div>
            )}
          </div>

          <label className="flex items-start gap-3 sm:col-span-2">
            <input
              type="checkbox"
              required
              checked={form.autoriza}
              onChange={(e) => set("autoriza", e.target.checked)}
              className="mt-1 h-4 w-4 accent-[hsl(var(--gold))]"
            />
            <span className="text-xs leading-relaxed text-background/70">
              Autorizo el tratamiento de mis datos personales conforme a la{" "}
              <Link to="/politica-datos" className="text-gold underline underline-offset-4">
                Política de Tratamiento de Datos Personales
              </Link>
              . *
            </span>
          </label>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="label-eyebrow w-full bg-gold px-10 py-5 text-accent-foreground transition-colors duration-500 hover:bg-gold-soft"
            >
              Enviar cotización por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Cotizar;
