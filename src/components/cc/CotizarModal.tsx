import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/cc/Logo";
import { HABITACIONES, SALONES, WA_EVENTOS } from "@/data/cartagenaComfort";

const field =
  "w-full border-b border-background/25 bg-transparent py-3 text-sm text-background outline-none transition-colors placeholder:text-background/40 focus:border-gold";

type Props = {
  open: boolean;
  onClose: () => void;
  defaultServicio?: "Hotel" | "Eventos";
};

const ACOMODACIONES: Record<string, string[]> = {
  Hotel: HABITACIONES.map((h) => h.nombre),
  Eventos: SALONES.map((s) => s.nombre),
};

const CotizarModal = ({ open, onClose, defaultServicio = "Hotel" }: Props) => {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState<string>(defaultServicio);
  const [acomodacion, setAcomodacion] = useState(ACOMODACIONES[defaultServicio][0]);
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [personas, setPersonas] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [acepto, setAcepto] = useState(false);

  useEffect(() => {
    setAcomodacion(ACOMODACIONES[servicio][0]);
  }, [servicio]);

  const esHotel = servicio === "Hotel";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hola, quiero iniciar una cotización en Cartagena Comfort.\n\n` +
      `Nombre: ${nombre}\n` +
      `Servicio: ${servicio}\n` +
      `Acomodación: ${acomodacion}\n` +
      (esHotel
        ? `Fecha de ingreso: ${fechaIngreso}\nFecha de salida: ${fechaSalida}\n`
        : `Fecha: ${fechaIngreso}\n`) +
      `${esHotel ? "Personas" : "Asistentes"}: ${personas}\n` +
      `Observaciones: ${observaciones || "Ninguna"}`;
    window.open(
      `https://wa.me/${WA_EVENTOS}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[70] flex items-center justify-center px-6"
        >
          <div
            onClick={onClose}
            className="absolute inset-0 bg-ink/70 backdrop-blur-xl"
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Cotización rápida"
            className="glass-card relative max-h-[88vh] w-full max-w-md overflow-y-auto p-10 text-background"
          >
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-5 top-5 text-background/60 transition-colors hover:text-gold"
            >
              <X className="h-4 w-4" />
            </button>

            <Logo className="h-11 w-auto" />
            <p className="label-eyebrow mt-6 text-gold">Cotización rápida</p>
            <h3 className="mt-4 font-serif text-3xl leading-tight">Cuéntanos lo esencial</h3>


            <form onSubmit={submit} className="mt-8 space-y-6">
              <input
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                className={field}
              />
              <select
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                className={`${field} [&>option]:text-foreground`}
              >
                <option value="Hotel">Hotel</option>
                <option value="Eventos">Eventos</option>
              </select>
              <select
                value={acomodacion}
                onChange={(e) => setAcomodacion(e.target.value)}
                className={`${field} [&>option]:text-foreground`}
              >
                {ACOMODACIONES[servicio].map((nombre) => (
                  <option key={nombre} value={nombre}>
                    {nombre}
                  </option>
                ))}
              </select>
              {esHotel ? (
                <div className="flex gap-4">
                  <label className="flex-1">
                    <span className="mb-1 block text-xs text-background/50">
                      Fecha de ingreso
                    </span>
                    <input
                      required
                      type="date"
                      value={fechaIngreso}
                      onChange={(e) => setFechaIngreso(e.target.value)}
                      className={field}
                    />
                  </label>
                  <label className="flex-1">
                    <span className="mb-1 block text-xs text-background/50">
                      Fecha de salida
                    </span>
                    <input
                      required
                      type="date"
                      min={fechaIngreso || undefined}
                      value={fechaSalida}
                      onChange={(e) => setFechaSalida(e.target.value)}
                      className={field}
                    />
                  </label>
                </div>
              ) : (
                <label>
                  <span className="mb-1 block text-xs text-background/50">Fecha del evento</span>
                  <input
                    required
                    type="date"
                    value={fechaIngreso}
                    onChange={(e) => setFechaIngreso(e.target.value)}
                    className={field}
                  />
                </label>
              )}
              <input
                required
                type="number"
                min={1}
                value={personas}
                onChange={(e) => setPersonas(e.target.value)}
                placeholder={esHotel ? "Cantidad de personas" : "Cantidad de asistentes"}
                className={field}
              />
              <textarea
                value={observaciones}
                onChange={(e) => setObservaciones(e.target.value)}
                placeholder="Observaciones (opcional)"
                rows={2}
                className={`${field} resize-none`}
              />
              <label className="flex items-start gap-3 text-xs leading-relaxed text-background/60">
                <input
                  required
                  type="checkbox"
                  checked={acepto}
                  onChange={(e) => setAcepto(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
                />
                <span>
                  He leído y acepto la{" "}
                  <Link to="/politica-datos" target="_blank" className="text-gold underline">
                    Política de Tratamiento de Datos Personales
                  </Link>
                  .
                </span>
              </label>
              <button
                type="submit"
                className="label-eyebrow w-full bg-gold px-8 py-4 text-accent-foreground transition-colors duration-500 hover:bg-gold-soft"
              >
                Iniciar cotización
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CotizarModal;
