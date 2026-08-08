import blanco from "@/assets/cc-logo-blanco.png";
import verde from "@/assets/cc-logo-verde.png";

type Props = {
  variant?: "blanco" | "verde";
  className?: string;
  priority?: boolean;
};

const Logo = ({ variant = "blanco", className = "h-10 w-auto", priority }: Props) => (
  <img
    src={variant === "verde" ? verde : blanco}
    alt="Cartagena Comfort — Hotel & Eventos"
    width={1920}
    height={957}
    loading={priority ? "eager" : "lazy"}
    decoding="async"
    className={`select-none object-contain ${className}`}
  />
);

export default Logo;
