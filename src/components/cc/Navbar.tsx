import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Hotel", href: "#hotel" },
  { label: "Eventos", href: "#eventos" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl"
        >
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="#top" className="flex flex-col leading-none">
              <span className="font-serif text-lg text-primary">Cartagena Comfort</span>
              <span className="label-eyebrow mt-1 text-[0.55rem] text-muted-foreground">
                Hotel &amp; Eventos
              </span>
            </a>

            <ul className="hidden items-center gap-9 md:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="label-eyebrow text-foreground/70 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Abrir menú"
              className="md:hidden"
            >
              <span className="label-eyebrow text-primary">{open ? "Cerrar" : "Menú"}</span>
            </button>
          </nav>

          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-t border-border/60 md:hidden"
              >
                {links.map((l) => (
                  <li key={l.href} className="border-b border-border/40 last:border-0">
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="label-eyebrow block px-6 py-4 text-foreground/80"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
