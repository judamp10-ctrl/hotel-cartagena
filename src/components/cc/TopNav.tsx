import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/cc/Logo";

export type NavLink = { id: string; label: string };

type Props = {
  links: NavLink[];
  active: string;
  switchLabel: string;
  onSwitch: () => void;
  onCotizar: () => void;
};

const TopNav = ({ links, active, switchLabel, onSwitch, onCotizar }: Props) => {
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = barRef.current?.offsetHeight ?? 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const go = (id: string) => {
    // Si el menú móvil está abierto, su animación de cierre (AnimatePresence)
    // interfiere con un scrollTo lanzado en el mismo tick y lo cancela — se
    // espera a que termine esa transición (350ms) antes de scrollear.
    if (open) {
      setOpen(false);
      setTimeout(() => scrollToSection(id), 360);
    } else {
      scrollToSection(id);
    }
  };

  const goTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const switchAndClose = () => {
    setOpen(false);
    onSwitch();
  };

  const cotizarAndClose = () => {
    setOpen(false);
    onCotizar();
  };

  const linkClass = (isActive: boolean) =>
    `relative text-[0.64rem] font-medium uppercase tracking-[0.28em] transition-all duration-500 ${
      isActive ? "text-background" : "text-background/55 hover:text-background/85"
    }`;

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="glass-nav fixed inset-x-0 top-0 z-50 w-full"
    >
      <div ref={barRef} className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <button onClick={goTop} aria-label="Ir al inicio" className="shrink-0">
          <Logo priority className="h-11 w-auto md:h-12" />
        </button>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button onClick={() => go(l.id)} className={linkClass(active === l.id)}>
                {l.label}
                <span
                  className={`gold-rule absolute -bottom-2 left-0 h-px transition-all duration-500 ${
                    active === l.id ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <button
            onClick={onSwitch}
            className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-gold transition-colors duration-500 hover:text-gold-soft"
          >
            {switchLabel}
          </button>
          <button
            onClick={onCotizar}
            className="label-eyebrow border border-gold/60 px-6 py-3 text-background transition-colors duration-500 hover:bg-gold hover:text-accent-foreground"
          >
            Cotizar
          </button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-9 w-9 items-center justify-center text-background lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-stretch overflow-hidden border-t border-border/40 px-6 lg:hidden"
          >
            {links.map((l) => (
              <li key={l.id} className="w-full">
                <button
                  onClick={() => go(l.id)}
                  className={`block w-full py-3 text-left text-[0.7rem] font-medium uppercase tracking-[0.2em] ${
                    active === l.id ? "text-background" : "text-background/60"
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li className="w-full border-t border-border/40 pt-4">
              <button
                onClick={cotizarAndClose}
                className="label-eyebrow block w-full bg-gold px-4 py-3 text-center text-accent-foreground"
              >
                Cotizar
              </button>
            </li>
            <li className="w-full pb-5 pt-4">
              <button
                onClick={switchAndClose}
                className="block w-full text-center text-[0.64rem] font-medium uppercase tracking-[0.28em] text-gold"
              >
                {switchLabel}
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default TopNav;
