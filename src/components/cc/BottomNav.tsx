import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Logo from "@/components/cc/Logo";

export type NavLink = { id: string; label: string };

type Props = {
  links: NavLink[];
  active: string;
  switchLabel: string;
  onSwitch: () => void;
};

const PRIMARY_COUNT = 3;

const BottomNav = ({ links, active, switchLabel, onSwitch }: Props) => {
  const [open, setOpen] = useState(false);
  const primary = links.slice(0, PRIMARY_COUNT);
  const secondary = links.slice(PRIMARY_COUNT);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    if (id === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const top = el.getBoundingClientRect().top + window.scrollY - 24;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const switchAndClose = () => {
    setOpen(false);
    onSwitch();
  };

  const linkClass = (isActive: boolean) =>
    `relative text-[0.58rem] font-medium uppercase tracking-[0.3em] transition-all duration-500 md:text-[0.66rem] ${
      isActive ? "text-background" : "text-background/50 hover:text-background/80"
    }`;

  const primaryMobileClass = (isActive: boolean) =>
    `relative text-[0.6rem] font-medium uppercase tracking-[0.14em] transition-all duration-500 ${
      isActive ? "text-background" : "text-background/50 hover:text-background/80"
    }`;

  return (
    <motion.nav
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="glass-nav fixed inset-x-0 bottom-0 z-50 w-full overflow-x-hidden"
    >
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4 border-b border-border/40 py-5 md:hidden"
          >
            {secondary.map((l) => (
              <li key={l.id}>
                <button onClick={() => go(l.id)} className={linkClass(active === l.id)}>
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={switchAndClose}
                className="text-[0.58rem] font-medium uppercase tracking-[0.3em] text-gold transition-colors duration-500 hover:text-gold-soft"
              >
                {switchLabel}
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>

      <ul className="flex items-center justify-start gap-2.5 py-5 pl-4 pr-4 md:hidden">
        {primary.map((l) => {
          const isActive = active === l.id;
          return (
            <li key={l.id} className="shrink-0 whitespace-nowrap">
              <button onClick={() => go(l.id)} className={primaryMobileClass(isActive)}>
                {l.label}
                <span
                  className={`gold-rule absolute -bottom-2 left-0 h-px transition-all duration-500 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </button>
            </li>
          );
        })}
        <li className="shrink-0">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Cerrar menú" : "Más opciones"}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-background/25 text-background/60 transition-all duration-500 hover:border-gold hover:text-gold"
          >
            <Plus className={`h-3.5 w-3.5 transition-transform duration-500 ${open ? "rotate-45" : ""}`} />
          </button>
        </li>
      </ul>

      {/* Desktop: todo en una fila, sin recortar nada */}
      <ul className="hidden items-center justify-center gap-12 px-4 py-5 md:flex">
        {links.map((l) => {
          const isActive = active === l.id;
          return (
            <li key={l.id}>
              <button onClick={() => go(l.id)} className={linkClass(isActive)}>
                {l.label}
                <span
                  className={`gold-rule absolute -bottom-2 left-0 h-px transition-all duration-500 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </button>
            </li>
          );
        })}
        <li>
          <button
            onClick={onSwitch}
            className="text-[0.66rem] font-medium uppercase tracking-[0.3em] text-gold transition-colors duration-500 hover:text-gold-soft"
          >
            {switchLabel}
          </button>
        </li>
      </ul>

      <button
        onClick={() => go("inicio")}
        aria-label="Ir al inicio"
        className="absolute bottom-3 left-6 hidden opacity-80 transition-opacity hover:opacity-100 lg:block"
      >
        <Logo className="h-10 w-auto" />
      </button>
    </motion.nav>
  );
};

export default BottomNav;
