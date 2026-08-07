import { motion } from "framer-motion";

export type NavLink = { id: string; label: string };

type Props = {
  links: NavLink[];
  active: string;
  switchLabel: string;
  onSwitch: () => void;
};

const BottomNav = ({ links, active, switchLabel, onSwitch }: Props) => {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const top = el.getBoundingClientRect().top + window.scrollY - 24;
    window.scrollTo({ top, behavior: "smooth" });
  };


  return (
    <motion.nav
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="glass-nav fixed inset-x-0 bottom-0 z-50 w-full"
    >
      <ul className="flex items-center justify-center gap-6 px-4 py-5 md:gap-12">
        {links.map((l) => {
          const isActive = active === l.id;
          return (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`relative text-[0.58rem] font-medium uppercase tracking-[0.3em] transition-all duration-500 md:text-[0.66rem] ${
                  isActive ? "text-background" : "text-background/50 hover:text-background/80"
                }`}
              >
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
            className="text-[0.58rem] font-medium uppercase tracking-[0.3em] text-gold transition-colors duration-500 hover:text-gold-soft md:text-[0.66rem]"
          >
            {switchLabel}
          </button>
        </li>
      </ul>
    </motion.nav>
  );
};

export default BottomNav;
