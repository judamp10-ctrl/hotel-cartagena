import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { CONTACTO } from "@/data/cartagenaComfort";

const WhatsAppFab = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-64 overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-lift)]"
          >
            <p className="label-eyebrow border-b border-border px-5 py-3 text-muted-foreground">
              ¿Con quién quieres hablar?
            </p>
            <a
              href={`https://wa.me/${CONTACTO.hotel.wa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-b border-border px-5 py-4 transition-colors hover:bg-secondary"
            >
              <span className="block font-serif text-base text-primary">Reservas de Hotel</span>
              <span className="text-xs text-muted-foreground">{CONTACTO.hotel.tel}</span>
            </a>
            <a
              href={`https://wa.me/${CONTACTO.eventos.wa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-4 transition-colors hover:bg-secondary"
            >
              <span className="block font-serif text-base text-primary">Cotizar Evento</span>
              <span className="text-xs text-muted-foreground">{CONTACTO.eventos.tel}</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Contactar por WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-500 hover:scale-105"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default WhatsAppFab;
