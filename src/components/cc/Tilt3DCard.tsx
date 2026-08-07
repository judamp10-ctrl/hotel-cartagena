import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** variante de borde/fondo */
  variant?: "glass" | "gold";
  intensity?: number;
};

/**
 * Tarjeta 3D interactiva: inclinación en X/Y siguiendo el cursor,
 * borde con gradiente dorado y resplandor al hover.
 * Los hijos pueden usar la utilidad `.depth-*` para flotar en distintos translateZ.
 */
const Tilt3DCard = ({ children, className = "", variant = "glass", intensity = 9 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const sx = useSpring(mx, { stiffness: 180, damping: 20, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 180, damping: 20, mass: 0.4 });

  const rotateY = useTransform(sx, [0, 1], [-intensity, intensity]);
  const rotateX = useTransform(sy, [0, 1], [intensity, -intensity]);
  const glowX = useTransform(sx, (v) => `${v * 100}%`);
  const glowY = useTransform(sy, (v) => `${v * 100}%`);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="tilt-perspective">
      <motion.div
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
        className={`tilt-card ${variant === "gold" ? "tilt-card-gold" : ""} group relative ${className}`}
      >
        <motion.span
          aria-hidden
          style={{ left: glowX, top: glowY }}
          className="tilt-glow"
        />
        <div className="tilt-inner relative">{children}</div>
      </motion.div>
    </div>
  );
};

export default Tilt3DCard;
