import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { WA_EVENTOS } from "@/data/cartagenaComfort";

const field =
  "w-full border-b border-background/25 bg-transparent py-3 text-sm text-background outline-none transition-colors placeholder:text-background/40 focus:border-gold";

type Props = {
  open: boolean;
  onClose: () => void;
  defaultServicio?: "Hotel" | "Eventos";
};

const CotizarModal = ({ open, onClose, defaultServicio = "Hotel" }: Props) => {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState<string>(defaultServicio);
  const [fecha, setFecha] = useState("");
  const [personas, setPersonas] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hola, quiero iniciar una cotización en Cartagena Comfort.\n\n` +
      `Nombre: ${nombre}\n` +
      `Servicio: ${servicio}\n` +
      `Fecha: ${fecha}\n` +
      `Personas: ${personas}`;
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
            className="glass-card relative w-full max-w-md p-10 text-background"
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
              <input
                required
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                className={field}
              />
              <input
                required
                type="number"
                min={1}
                value={personas}
                onChange={(e) => setPersonas(e.target.value)}
                placeholder="Número de personas"
                className={field}
              />
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
